import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import industries from '../data/industries'

// Register fonts from Google Fonts CDN so the PDF matches site typography.
Font.register({
  family: 'DM Serif Display',
  src: 'https://fonts.gstatic.com/s/dmserifdisplay/v10/-nFnOHM81r4j6k0gjAW3mujVU2B2K_d709jy92k.ttf',
})
Font.register({
  family: 'DM Sans',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHQ.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/dmsans/v15/rP2Cp2ywxg089UriAWCrCBimC2Q.ttf', fontWeight: 500 },
    { src: 'https://fonts.gstatic.com/s/dmsans/v15/rP2Cp2ywxg089UriASitCBimC2Q.ttf', fontWeight: 700 },
  ],
})
Font.register({
  family: 'IBM Plex Mono',
  src: 'https://fonts.gstatic.com/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n5igg1l9kn-s.ttf',
})

const ACCENT = '#C4622D'
const TEXT_PRIMARY = '#1A1714'
const TEXT_SECONDARY = '#6B6560'
const BORDER = '#E8E3DC'
const SURFACE = '#FAF7F2'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'DM Sans',
    fontSize: 11,
    lineHeight: 1.6,
    color: TEXT_PRIMARY,
    backgroundColor: '#FFFFFF',
    padding: 56,
  },

  // ─── Cover ───
  coverPage: {
    fontFamily: 'DM Sans',
    backgroundColor: '#FFFFFF',
    padding: 64,
    flexDirection: 'column',
  },
  coverEyebrow: {
    fontSize: 9,
    color: ACCENT,
    letterSpacing: 2.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 24,
  },
  coverTitle: {
    fontFamily: 'DM Serif Display',
    fontSize: 40,
    color: TEXT_PRIMARY,
    lineHeight: 1.1,
    marginBottom: 28,
  },
  coverDescription: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    lineHeight: 1.65,
    marginBottom: 36,
  },
  coverMetaRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 48,
  },
  coverMetaBadge: {
    fontSize: 9,
    backgroundColor: '#F5E6DC',
    color: ACCENT,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontWeight: 700,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  coverFooter: {
    marginTop: 'auto',
    borderTop: `1pt solid ${BORDER}`,
    paddingTop: 20,
  },
  coverFooterLabel: {
    fontSize: 9,
    color: TEXT_SECONDARY,
    letterSpacing: 1.8,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  coverFooterValue: {
    fontSize: 11,
    color: TEXT_PRIMARY,
  },

  // ─── Body ───
  sectionEyebrow: {
    fontSize: 9,
    color: ACCENT,
    letterSpacing: 2,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: 'DM Serif Display',
    fontSize: 22,
    color: TEXT_PRIMARY,
    marginBottom: 14,
    lineHeight: 1.2,
  },
  body: {
    fontSize: 11,
    color: TEXT_PRIMARY,
    lineHeight: 1.65,
    marginBottom: 14,
  },
  bodySecondary: {
    fontSize: 11,
    color: TEXT_SECONDARY,
    lineHeight: 1.65,
    marginBottom: 14,
  },

  outcomesList: {
    marginTop: 4,
    marginBottom: 16,
  },
  outcomeRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  outcomeDot: {
    fontSize: 11,
    color: ACCENT,
    marginRight: 8,
    fontWeight: 700,
  },
  outcomeText: {
    fontSize: 11,
    color: TEXT_PRIMARY,
    lineHeight: 1.55,
    flex: 1,
  },

  // ─── Step card ───
  step: {
    marginTop: 22,
    marginBottom: 10,
    borderTop: `1pt solid ${BORDER}`,
    paddingTop: 20,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepNumberBox: {
    width: 28,
    height: 28,
    backgroundColor: ACCENT,
    color: '#FFFFFF',
    borderRadius: 5,
    fontSize: 13,
    fontFamily: 'DM Serif Display',
    textAlign: 'center',
    paddingTop: 5,
    marginRight: 12,
  },
  stepTitle: {
    fontFamily: 'DM Serif Display',
    fontSize: 16,
    color: TEXT_PRIMARY,
    flex: 1,
    lineHeight: 1.2,
  },
  stepDescription: {
    fontSize: 11,
    color: TEXT_SECONDARY,
    lineHeight: 1.65,
    marginBottom: 10,
  },

  dataNoteLabel: {
    fontSize: 9,
    color: ACCENT,
    letterSpacing: 1.6,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 4,
    marginTop: 6,
  },
  dataNoteBox: {
    backgroundColor: SURFACE,
    border: `1pt solid ${BORDER}`,
    padding: 10,
    borderRadius: 4,
    marginBottom: 12,
  },
  dataNoteText: {
    fontSize: 10,
    color: TEXT_PRIMARY,
    lineHeight: 1.55,
  },

  promptLabel: {
    fontSize: 9,
    color: ACCENT,
    letterSpacing: 1.6,
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 4,
    marginTop: 8,
  },
  promptBox: {
    backgroundColor: '#1A1714',
    padding: 12,
    borderRadius: 4,
    marginBottom: 6,
  },
  promptText: {
    fontFamily: 'IBM Plex Mono',
    fontSize: 9,
    color: '#F5E6DC',
    lineHeight: 1.55,
  },

  // ─── Expectations ───
  expectationsBox: {
    marginTop: 28,
    padding: 18,
    backgroundColor: SURFACE,
    border: `1pt solid ${BORDER}`,
    borderRadius: 6,
  },
  expectationsTitle: {
    fontFamily: 'DM Serif Display',
    fontSize: 14,
    color: TEXT_PRIMARY,
    marginBottom: 10,
  },
  expectationsItem: {
    fontSize: 10.5,
    color: TEXT_PRIMARY,
    marginBottom: 8,
    lineHeight: 1.6,
  },
  expectationsLabel: {
    fontWeight: 700,
    color: ACCENT,
  },

  // ─── Footer ───
  pageFooter: {
    position: 'absolute',
    bottom: 28,
    left: 56,
    right: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    color: TEXT_SECONDARY,
    borderTop: `0.5pt solid ${BORDER}`,
    paddingTop: 8,
  },
})

function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getTagInfo(guide) {
  if (guide.tier === 'pro' && guide.industry) {
    const ind = industries.find((i) => i.slug === guide.industry)
    if (ind) return ind.name
  }
  return guide.tier === 'pro' ? 'Pro Guide' : 'Free Guide'
}

export default function GuidePDF({ guide }) {
  const tagLabel = getTagInfo(guide)
  const purchaseDate = formatDate()

  return (
    <Document
      title={guide.title}
      author="SMB AI Playbook"
      subject={guide.description}
    >
      {/* Cover Page */}
      <Page size="LETTER" style={styles.coverPage}>
        <Text style={styles.coverEyebrow}>
          {guide.tier === 'pro' ? 'SMB AI Playbook · Pro Guide' : 'SMB AI Playbook · Free Guide'}
        </Text>
        <Text style={styles.coverTitle}>{guide.title}</Text>
        <Text style={styles.coverDescription}>{guide.description}</Text>

        <View style={styles.coverMetaRow}>
          <Text style={styles.coverMetaBadge}>{tagLabel}</Text>
          <Text style={styles.coverMetaBadge}>{guide.difficulty}</Text>
          <Text style={styles.coverMetaBadge}>{guide.time}</Text>
        </View>

        <Text style={styles.body}>
          {guide.intro}
        </Text>

        <View style={styles.coverFooter}>
          <Text style={styles.coverFooterLabel}>Issued</Text>
          <Text style={styles.coverFooterValue}>{purchaseDate}</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.coverFooterLabel}>Source</Text>
          <Text style={styles.coverFooterValue}>smbaiplaybook.xyz</Text>
        </View>
      </Page>

      {/* Outcomes + Steps Page */}
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.sectionEyebrow}>What you'll get</Text>
        <Text style={styles.sectionTitle}>Outcomes</Text>
        <View style={styles.outcomesList}>
          {guide.outcomes.map((o, i) => (
            <View key={i} style={styles.outcomeRow}>
              <Text style={styles.outcomeDot}>•</Text>
              <Text style={styles.outcomeText}>{o}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.sectionEyebrow}>The playbook</Text>
          <Text style={styles.sectionTitle}>Step-by-step guide</Text>
        </View>

        {guide.steps.map((step) => (
          <View key={step.number} style={styles.step} wrap>
            <View style={styles.stepHeader}>
              <Text style={styles.stepNumberBox}>{step.number}</Text>
              <Text style={styles.stepTitle}>{step.title}</Text>
            </View>

            <Text style={styles.stepDescription}>{step.description}</Text>

            {step.dataNote && (
              <View>
                <Text style={styles.dataNoteLabel}>What you'll need</Text>
                <View style={styles.dataNoteBox}>
                  <Text style={styles.dataNoteText}>{step.dataNote}</Text>
                </View>
              </View>
            )}

            {step.prompt && (
              <View>
                <Text style={styles.promptLabel}>Prompt</Text>
                <View style={styles.promptBox}>
                  <Text style={styles.promptText}>{step.prompt}</Text>
                </View>
              </View>
            )}
          </View>
        ))}

        {guide.expectations && (
          <View style={styles.expectationsBox} wrap={false}>
            <Text style={styles.expectationsTitle}>What to expect</Text>
            {guide.expectations.good && (
              <Text style={styles.expectationsItem}>
                <Text style={styles.expectationsLabel}>When it works: </Text>
                {guide.expectations.good}
              </Text>
            )}
            {guide.expectations.ifBad && (
              <Text style={styles.expectationsItem}>
                <Text style={styles.expectationsLabel}>If it doesn't: </Text>
                {guide.expectations.ifBad}
              </Text>
            )}
            {guide.expectations.time && (
              <Text style={styles.expectationsItem}>
                <Text style={styles.expectationsLabel}>Time & payoff: </Text>
                {guide.expectations.time}
              </Text>
            )}
          </View>
        )}

        {/* Page footer */}
        <View style={styles.pageFooter} fixed>
          <Text>{guide.title}</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages} · smbaiplaybook.xyz`
            }
          />
        </View>
      </Page>
    </Document>
  )
}
