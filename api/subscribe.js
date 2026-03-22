import { put, list } from '@vercel/blob';

// Strict email regex — no scripts, no HTML, just valid email addresses
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function sanitizeEmail(raw) {
  if (typeof raw !== 'string') return null;
  // Strip any HTML tags, trim whitespace, lowercase
  const cleaned = raw.replace(/<[^>]*>/g, '').trim().toLowerCase();
  // Max 254 chars per RFC 5321
  if (cleaned.length === 0 || cleaned.length > 254) return null;
  if (!EMAIL_REGEX.test(cleaned)) return null;
  // Must have a dot in the domain part
  const domain = cleaned.split('@')[1];
  if (!domain || !domain.includes('.')) return null;
  return cleaned;
}

function emailToKey(email) {
  // Deterministic, filesystem-safe key from email
  return email.replace(/[^a-z0-9@._-]/g, '_');
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;

    // Validate email
    const email = sanitizeEmail(body?.email);
    if (!email) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const blobPath = `subscribers/${emailToKey(email)}.json`;

    // Check for duplicate by listing blobs with exact prefix
    const { blobs } = await list({ prefix: blobPath, limit: 1 });
    if (blobs.length > 0) {
      return res.status(200).json({ message: "You're already subscribed!" });
    }

    // Store the subscriber
    await put(blobPath, JSON.stringify({
      email,
      subscribedAt: new Date().toISOString(),
    }), {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'application/json',
    });

    return res.status(201).json({ message: "You're in! We'll keep you posted." });

  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
