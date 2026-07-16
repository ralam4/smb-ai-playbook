import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'

// Use react-pdf's built-in PDF fonts — no external fetch, always available.
// Custom-font registration via Google Fonts CDN is unreliable in the browser
// context react-pdf uses, so we pick built-ins that render reliably.
const FONT_DISPLAY = 'Times-Roman'
const FONT_BODY = 'Helvetica'
const FONT_MONO = 'Courier'

const ACCENT = '#C4622D'
const TEXT_PRIMARY = '#1A1714'
const TEXT_SECONDARY = '#6B6560'
const BORDER = '#E8E3DC'
const SURFACE = '#FAF7F2'

const styles = StyleSheet.create({
  page: {
    fontFamily: FONT_BODY,
    fontSize: 11,
    lineHeight: 1.6,
    color: TEXT_PRIMARY,
    backgroundColor: '#FFFFFF',
    padding: 56,
  },

  // ─── Cover ───
  coverPage: {
    fontFamily: FONT_BODY,
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
    fontFamily: FONT_DISPLAY,
    fontSize: 40,
    color: TEXT_PRIMARY,
    lineHeight: 1.1,
    marginBottom: 20,
  },
  coverTagline: {
    fontSize: 15,
    color: ACCENT,
    lineHeight: 1.4,
    marginBottom: 20,
  },
  coverDescription: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    lineHeight: 1.65,
    marginBottom: 28,
  },
  coverMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 32,
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
    fontFamily: FONT_DISPLAY,
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

  // ─── Stack chips ───
  stackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  stackChip: {
    fontSize: 10,
    color: TEXT_PRIMARY,
    backgroundColor: SURFACE,
    border: `1pt solid ${BORDER}`,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  // ─── Cost table ───
  table: {
    marginTop: 4,
    marginBottom: 18,
    border: `1pt solid ${BORDER}`,
    borderRadius: 4,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: SURFACE,
    borderBottom: `1pt solid ${BORDER}`,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: `0.5pt solid ${BORDER}`,
    paddingVertical: 7,
    paddingHorizontal: 8,
  },
  tableRowLast: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 8,
  },
  tableHeaderCell: {
    fontSize: 8.5,
    fontWeight: 700,
    color: TEXT_SECONDARY,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  tableCellItem: {
    fontSize: 10,
    color: TEXT_PRIMARY,
    fontWeight: 700,
  },
  tableCellCost: {
    fontSize: 10,
    color: ACCENT,
    fontFamily: FONT_MONO,
  },
  tableCellNote: {
    fontSize: 9,
    color: TEXT_SECONDARY,
    lineHeight: 1.45,
  },
  colItem: { width: '30%' },
  colCost: { width: '18%' },
  colNote: { width: '52%' },

  roiBox: {
    borderRadius: 8,
    backgroundColor: '#E6F2EA',
    padding: 16,
    marginBottom: 8,
  },
  roiLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: TEXT_PRIMARY,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  roiText: {
    fontSize: 10.5,
    color: TEXT_PRIMARY,
    lineHeight: 1.6,
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
    fontFamily: FONT_DISPLAY,
    textAlign: 'center',
    paddingTop: 5,
    marginRight: 12,
  },
  stepTitle: {
    fontFamily: FONT_DISPLAY,
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
    fontFamily: FONT_MONO,
    fontSize: 9,
    color: '#F5E6DC',
    lineHeight: 1.55,
  },

  // ─── System prompt block ───
  systemPromptBox: {
    backgroundColor: '#1A1714',
    padding: 14,
    borderRadius: 6,
    marginTop: 4,
    marginBottom: 16,
  },
  systemPromptText: {
    fontFamily: FONT_MONO,
    fontSize: 8.5,
    color: '#F5E6DC',
    lineHeight: 1.5,
  },

  // ─── Bulleted lists (guardrails / checklist) ───
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bulletMarker: {
    fontSize: 10,
    color: ACCENT,
    marginRight: 8,
    fontFamily: FONT_MONO,
  },
  bulletText: {
    fontSize: 10.5,
    color: TEXT_PRIMARY,
    lineHeight: 1.55,
    flex: 1,
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

export default function AgentPDF({ agent }) {
  const issuedDate = formatDate()

  return (
    <Document
      title={agent.name}
      author="SMB AI Playbook"
      subject={agent.tagline}
    >
      {/* Cover Page */}
      <Page size="LETTER" style={styles.coverPage}>
        <Text style={styles.coverEyebrow}>SMB AI Playbook · Agent Blueprint</Text>
        <Text style={styles.coverTitle}>{agent.name}</Text>
        <Text style={styles.coverTagline}>{agent.tagline}</Text>
        <Text style={styles.coverDescription}>{agent.description}</Text>

        <View style={styles.coverMetaRow}>
          <Text style={styles.coverMetaBadge}>{agent.difficulty}</Text>
          <Text style={styles.coverMetaBadge}>{agent.buildTime} to build</Text>
          <Text style={styles.coverMetaBadge}>{agent.runningCost}</Text>
          <Text style={styles.coverMetaBadge}>{agent.timeSaved} saved</Text>
        </View>

        <Text style={styles.body}>{agent.whatItDoes}</Text>

        <View style={styles.coverFooter}>
          <Text style={styles.coverFooterLabel}>Issued</Text>
          <Text style={styles.coverFooterValue}>{issuedDate}</Text>
          <View style={{ height: 10 }} />
          <Text style={styles.coverFooterLabel}>Source</Text>
          <Text style={styles.coverFooterValue}>smbaiplaybook.xyz</Text>
        </View>
      </Page>

      {/* Outcomes, stack, costs, steps */}
      <Page size="LETTER" style={styles.page} wrap>
        <Text style={styles.sectionEyebrow}>What you&rsquo;ll get</Text>
        <Text style={styles.sectionTitle}>Outcomes</Text>
        <View style={styles.outcomesList}>
          {agent.outcomes.map((o, i) => (
            <View key={i} style={styles.outcomeRow}>
              <Text style={styles.outcomeDot}>•</Text>
              <Text style={styles.outcomeText}>{o}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionEyebrow}>What you&rsquo;ll build with</Text>
        <Text style={styles.sectionTitle}>The stack</Text>
        <View style={styles.stackRow}>
          {agent.stack.map((tool, i) => (
            <Text key={i} style={styles.stackChip}>{tool}</Text>
          ))}
        </View>

        <Text style={styles.sectionEyebrow}>Real costs &amp; ROI</Text>
        <Text style={styles.sectionTitle}>Cost breakdown</Text>
        <View style={styles.table} wrap={false}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.tableHeaderCell, styles.colItem]}>Item</Text>
            <Text style={[styles.tableHeaderCell, styles.colCost]}>Cost</Text>
            <Text style={[styles.tableHeaderCell, styles.colNote]}>Note</Text>
          </View>
          {agent.costBreakdown.map((line, i) => {
            const isLast = i === agent.costBreakdown.length - 1
            return (
              <View key={i} style={isLast ? styles.tableRowLast : styles.tableRow}>
                <Text style={[styles.tableCellItem, styles.colItem]}>{line.item}</Text>
                <Text style={[styles.tableCellCost, styles.colCost]}>{line.cost}</Text>
                <Text style={[styles.tableCellNote, styles.colNote]}>{line.note || ''}</Text>
              </View>
            )
          })}
        </View>

        <View style={styles.roiBox} wrap={false}>
          <Text style={styles.roiLabel}>The math</Text>
          <Text style={styles.roiText}>{agent.roi}</Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.sectionEyebrow}>The playbook</Text>
          <Text style={styles.sectionTitle}>Step-by-step guide</Text>
        </View>

        {agent.steps.map((step) => (
          <View key={step.number} style={styles.step} wrap>
            <View style={styles.stepHeader}>
              <Text style={styles.stepNumberBox}>{step.number}</Text>
              <Text style={styles.stepTitle}>{step.title}</Text>
            </View>

            <Text style={styles.stepDescription}>{step.description}</Text>

            {step.dataNote && (
              <View>
                <Text style={styles.dataNoteLabel}>What you&rsquo;ll need</Text>
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

        {/* Page footer */}
        <View style={styles.pageFooter} fixed>
          <Text>{agent.name}</Text>
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages} · smbaiplaybook.xyz`
            }
          />
        </View>
      </Page>

      {/* System prompt, guardrails, checklist, maintenance */}
      <Page size="LETTER" style={styles.page} wrap>
        <Text style={styles.sectionEyebrow}>Copy this in</Text>
        <Text style={styles.sectionTitle}>The system prompt</Text>
        <View style={styles.systemPromptBox} wrap>
          <Text style={styles.systemPromptText}>{agent.systemPrompt}</Text>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={styles.sectionEyebrow}>Non-negotiables</Text>
          <Text style={styles.sectionTitle}>Guardrails — what this agent must never do</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          {agent.guardrails.map((rule, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bulletMarker}>-</Text>
              <Text style={styles.bulletText}>{rule}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={styles.sectionEyebrow}>Before you ship it</Text>
          <Text style={styles.sectionTitle}>Test checklist</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          {agent.testChecklist.map((check, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bulletMarker}>[ ]</Text>
              <Text style={styles.bulletText}>{check}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={styles.sectionEyebrow}>Ongoing care</Text>
          <Text style={styles.sectionTitle}>Keep it healthy</Text>
        </View>
        <Text style={styles.bodySecondary}>{agent.maintenance}</Text>

        {/* Page footer */}
        <View style={styles.pageFooter} fixed>
          <Text>{agent.name}</Text>
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
