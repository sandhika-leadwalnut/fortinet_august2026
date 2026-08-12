import {
  KpiData,
  BacklinkGrowth,
  KeywordRankingPerformance,
  KeywordPosition,
  DaDistribution,
  PerformanceSummaryData,
  BusinessImpactData,
  KeyFinding,
} from "../types";

export const kpiData: KpiData = {
  urlsTracked: 42,
  totalBacklinks: 678,
  keywordsTracked: 75,
  planTotalBacklinks: 930,
};
import { getPerformanceStatus } from "../utils/performanceStatus";

export const backlinkGrowthData: BacklinkGrowth[] = [
  { month: "Jan '26", totalBacklinks: 50 },
  { month: "Feb '26", totalBacklinks: 153 },
  { month: "Mar '26", totalBacklinks: 211 },
  { month: "Apr '26", totalBacklinks: 285 },
  { month: "May '26", totalBacklinks: 390 },
  { month: "Jun '26", totalBacklinks: 425 },
  { month: "Jul '26", totalBacklinks: 678 },
];

export const keywordRankingPerformanceData = {
  top3: { december: 5, september: 8, march: 15 },
  firstPage: { december: 26, september: 29, march: 37 },
};

export const top3Keywords: KeywordPosition[] = [
  { name: "what is ztna", change: 5, rank: 2 },
{ name: "What is SD WAN", change: 5, rank: 3 },
{ name: "sase", change: 5, rank: 2 },
{ name: "what is sase", change: 9, rank: 2 },
{ name: "firewall", change: 5, rank: 2 },
{ name: "what is cyber attack", change: 5, rank: 3 },
{ name: "what is ot security", change: 6, rank: 2 },
{ name: "ot security", change: 7, rank: 2 },
{ name: "what is secops", change: 20, rank: 2 },
{ name: "AI Cybersecurity", change: 1, rank: 2 },
{ name: "role of ai in cyber security", change: 100, rank: 1 },
{ name: "Quantum Computing Security", change: 100, rank: 1 },
{ name: "Quantum Safe Security", change: 2, rank: 1 },
{ name: "Unified SASE", change: -2, rank: 3 },
{ name: "Ruggedized firewall", change: 100, rank: 1 },]

export const firstPageKeywords: KeywordPosition[] = [
  { name: "what is ztna", change: 5, rank: 2 },
{ name: "ZTNA", change: 6, rank: 10 },
{ name: "what is network security", change: 10, rank: 5 },
{ name: "cybersecurity", change: 4, rank: 6 },
{ name: "What is SD WAN", change: 5, rank: 3 },
{ name: "sd wan", change: 1, rank: 5 },
{ name: "sase", change: 5, rank: 2 },
{ name: "what is sase", change: 9, rank: 2 },
{ name: "firewall", change: 5, rank: 2 },
{ name: "what is firewall", change: 3, rank: 5 },
{ name: "what is cyber attack", change: 5, rank: 3 },
{ name: "cyber attack", change: -1, rank: 8 },
{ name: "what is ot security", change: 6, rank: 2 },
{ name: "ot security", change: 7, rank: 2 },
{ name: "what is secops", change: 20, rank: 2 },
{ name: "secops", change: 5, rank: 9 },
{ name: "what is ransomware", change: 2, rank: 7 },
{ name: "ransomware", change: -1, rank: 8 },
{ name: "casb", change: 5, rank: 5 },
{ name: "casb security", change: 8, rank: 10 },
{ name: "AI Security systems", change: 2, rank: 6 },
{ name: "AI Cybersecurity", change: 1, rank: 2 },
{ name: "role of ai in cyber security", change: 100, rank: 1 },
{ name: "Application security definition", change: 7, rank: 7 },
{ name: "PAM", change: -2, rank: 7 },
{ name: "cybersecurity in banking", change: 94, rank: 7 },
{ name: "cloud security vendors", change: 4, rank: 5 },
{ name: "cloud security providers", change: -3, rank: 8 },
{ name: "network monitoring system", change: 25, rank: 4 },
{ name: "Post-Quantum Cryptography", change: -3, rank: 4 },
{ name: "Quantum Computing Security", change: 100, rank: 1 },
{ name: "Quantum Key Distribution", change: 0, rank: 4 },
{ name: "Quantum Safe Security", change: 2, rank: 1 },
{ name: "Quantum Security", change: 3, rank: 5 },
{ name: "Unified SASE", change: -2, rank: 3 },
{ name: "Ruggedized firewall", change: 100, rank: 1 },
{ name: "siem products", change: 0, rank: 10 },
];

export const allFirstPageKeywords: KeywordPosition[] = [
  ...top3Keywords,
  ...firstPageKeywords,
].sort((a, b) => a.rank - b.rank);

export const daDistributionData: DaDistribution[] = [
  { name: "DA 30-40", value: 69 },
  { name: "DA 41-70", value: 462 },
  { name: "DA 71-100", value: 147 },
];

export const performanceSummaryData: PerformanceSummaryData[] = [
  {
    url: "ZTNA",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-ztna",
    backlinkGrowth: 29,
    paChange: 5,
    bestKeywordMove: "ZTNA (+6)",
    worstKeywordMove: "-",
  },
  {
    url: "Network Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-network-security",
    backlinkGrowth: 17,
    paChange: 0,
    bestKeywordMove: "what is network security (+10)",
    worstKeywordMove: "network security (-1)",
  },
  {
    url: "Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cybersecurity",
    backlinkGrowth: 21,
    paChange: 1,
    bestKeywordMove: "cybersecurity (+4)",
    worstKeywordMove: "what is cybersecurity (-1)",
  },
  {
    url: "SD-WAN",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/sd-wan-explained",
    backlinkGrowth: 26,
    paChange: 0,
    bestKeywordMove: "What is SD WAN (+5)",
    worstKeywordMove: "-",
  },
  {
    url: "SASE",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/sase",
    backlinkGrowth: 31,
    paChange: 0,
    bestKeywordMove: "what is sase (+9)",
    worstKeywordMove: "-",
  },
  {
    url: "Firewall",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/firewall",
    backlinkGrowth: 21,
    paChange: 0,
    bestKeywordMove: "firewall (+5)",
    worstKeywordMove: "-",
  },
  {
    url: "Cyber Attack",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-cyber-attack",
    backlinkGrowth: 1,
    paChange: 1,
    bestKeywordMove: "what is cyber attack (+5)",
    worstKeywordMove: "cyber attack (-1)",
  },
  {
    url: "OT Security",
    urlLink:
      "https://www.fortinet.com/solutions/industries/scada-industrial-control-systems/what-is-ot-security",
    backlinkGrowth: 24,
    paChange: 0,
    bestKeywordMove: "ot security (+7)",
    worstKeywordMove: "-",
  },
  {
    url: "SD-WAN Products",
    urlLink: "https://www.fortinet.com/products/sd-wan",
    backlinkGrowth: 13,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "sdwan solutions (-78)",
  },
  {
    url: "SecOps",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-secops",
    backlinkGrowth: 27,
    paChange: 2,
    bestKeywordMove: "what is secops (+20)",
    worstKeywordMove: "-",
  },
  {
    url: "Ransomware ",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ransomware",
    backlinkGrowth: 2,
    paChange: 1,
    bestKeywordMove: "what is ransomware (+2)",
    worstKeywordMove: "ransomware (-1)",
  },
  {
    url: "Quantum Security",
    urlLink: "https://www.fortinet.com/resources/hubs/quantum-security",
    backlinkGrowth: 2,
    paChange: 3,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "Cloud Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cloud-security",
    backlinkGrowth: 68,
    paChange: 3,
    bestKeywordMove: "what is cloud security (+3)",
    worstKeywordMove: "cloud security (-2)",
  },
  {
    url: "CASB",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/casb",
    backlinkGrowth: 2,
    paChange: 1,
    bestKeywordMove: "casb security (+8)",
    worstKeywordMove: "-",
  },
  {
    url: "FortiAI",
    urlLink:
      "https://www.fortinet.com/solutions/enterprise-midsize-business/fortiai",
    backlinkGrowth: 8,
    paChange: 3,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "AI Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ai-security",
    backlinkGrowth: 28,
    paChange: 1,
    bestKeywordMove: "AI Security systems (+2)",
    worstKeywordMove: "AI Security (-3)",
  },
  {
    url: "Cyber Threat Intelligence",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cyber-threat-intelligence",
    backlinkGrowth: 12,
    paChange: 1,
    bestKeywordMove: "Types of threat intelligence (+59)",
    worstKeywordMove: "-",
  },
  {
    url: "AI in Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/artificial-intelligence-in-cybersecurity",
    backlinkGrowth: 41,
    paChange: 0,
    bestKeywordMove: "role of ai in cyber security (+100)",
    worstKeywordMove: "-",
  },
  {
    url: "Application Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/application-security",
    backlinkGrowth: 2,
    paChange: 5,
    bestKeywordMove: "Application security definition (+7)",
    worstKeywordMove: "Application Security (-2)",
  },
  {
    url: "Cloud Data Protection",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cloud-data-protection",
    backlinkGrowth: 17,
    paChange: 4,
    bestKeywordMove: "Cloud Data Security (+37)",
    worstKeywordMove: "Data security in the cloud (-9)",
  },
  {
    url: "PAM",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/privileged-access-management",
    backlinkGrowth: 4,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "PAM (-2)",
  },
  {
    url: "Fortinet Homepage",
    urlLink: "https://www.fortinet.com/",
    backlinkGrowth: 16,
    paChange: 1,
    bestKeywordMove: "cybersecurity (+74)",
    worstKeywordMove: "-",
  },
  {
    url: "Quantum Safe Encryption",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/quantum-safe-encryption-safeguarding-data-for-the-quantum-era",
    backlinkGrowth: 12,
    paChange: -13,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "Cyber Risk",
    urlLink:
      "https://www.fortinet.com/blog/business-and-technology/cyber-risk-is-a-business-risk",
    backlinkGrowth: 2,
    paChange: 2,
    bestKeywordMove: "-",
    worstKeywordMove: "cyber risk (-61)",
  },
  {
    url: "Banking Cybersecurity",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/cybersecurity-in-banking",
    backlinkGrowth: 1,
    paChange: 2,
    bestKeywordMove: "cybersecurity in banking (+94)",
    worstKeywordMove: "-",
  },
  {
    url: "Best Cloud Security Providers",
    urlLink: "https://www.fortinet.com/resources/articles/best-cloud-security-providers",
    backlinkGrowth: 17,
    paChange: -17,
    bestKeywordMove: "cloud security vendors (+4)",
    worstKeywordMove: "cloud security providers (-3)",
  },
  {
    url: "Network Monitoring",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/network-monitoring",
    backlinkGrowth: 14,
    paChange: 1,
    bestKeywordMove: "network monitoring system (+25)",
    worstKeywordMove: "-",
  },
  {
    url: "Shor’s & Grover’s Algorithms",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/shors-grovers-algorithms",
    backlinkGrowth: 20,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "Post-Quantum Cryptography",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/post-quantum-cryptography",
    backlinkGrowth: 18,
    paChange: 5,
    bestKeywordMove: "-",
    worstKeywordMove: "Post-Quantum Cryptography (-3)",
  },
  {
    url: "Quantum Computing Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-computing-security",
    backlinkGrowth: 12,
    paChange: 1,
    bestKeywordMove: "Quantum Computing Security (+100)",
    worstKeywordMove: "-",
  },
  {
    url: "Quantum Key Distribution",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-key-distribution",
    backlinkGrowth: 15,
    paChange: -17,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "Quantum Safe Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-safe-security",
    backlinkGrowth: 12,
    paChange: 5,
    bestKeywordMove: "Quantum Safe Security (+2)",
    worstKeywordMove: "-",
  },
  {
    url: "Quantum Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-security",
    backlinkGrowth: 16,
    paChange: 3,
    bestKeywordMove: "Quantum Security (+3)",
    worstKeywordMove: "-",
  },
  {
    url: "Security Operations Center (SOC)",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-soc",
    backlinkGrowth: 8,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "Unified SASE",
    urlLink: "https://www.fortinet.com/solutions/unified-sase",
    backlinkGrowth: 24,
    paChange: 7,
    bestKeywordMove: "-",
    worstKeywordMove: "Unified SASE (-2)",
  },
  {
    url: "Ruggedized firewall",
    urlLink: "https://www.fortinet.com/products/rugged",
    backlinkGrowth: 12,
    paChange: 0,
    bestKeywordMove: "Ruggedized firewall (+100)",
    worstKeywordMove: "-",
  },
  {
    url: "Zero Trust",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-zero-trust",
    backlinkGrowth: 15,
    paChange: 0,
    bestKeywordMove: "What is Zero Trust (+52)",
    worstKeywordMove: "Zero trust (-2)",
  },
  {
    url: "AI Security",
    urlLink: "https://www.fortinet.com/solutions/ai-security",
    backlinkGrowth: 4,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: "AI Security (-35)",
  },
  {
    url: "Cloud Security Services",
    urlLink: "https://www.fortinet.com/solutions/cloud-security/enterprise",
    backlinkGrowth: 14,
    paChange: 4,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },
  {
    url: "Soar",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-soar",
    backlinkGrowth: 3,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "soar automation (-99)",
  },
  {
    url: "FortiSIEM",
    urlLink: "https://www.fortinet.com/products/siem/fortisiem",
    backlinkGrowth: 11,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "siem products (-2)",
  },
  {
    url: "Security Operations",
    urlLink: "https://www.fortinet.com/solutions/security-operations",
    backlinkGrowth: 5,
    paChange: 6,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
  },

].map((item) => ({
    ...item,
    status: getPerformanceStatus(
      item.bestKeywordMove,
      item.worstKeywordMove
    ),
  }));

export const businessImpactData: BusinessImpactData[] = [
  {
    category: "Keywords on Page 1",
    baseline: 30600,
    current: 41271,
    improvement: 35,
    color: "#006FCA",
  },
  {
    category: "Position 1 Keywords",
    baseline: 6288,
    current: 6490,
    improvement: 3.2,
    color: "#00B6B5",
  },
  {
    category: "Positions 2 & 3 Keywords",
    baseline: 7460,
    current: 10614,
    improvement: 42,
    color: "#4CAF50",
  },
];

export const businessImpactCategories = [
  {
    name: "Page 1\n(Positions 1-10)",
    baseline:41683,
    current:  44846,
  },
  {
    name: "Position 1",
    baseline: 6085,
    current: 7171,
  },
  {
    name: "Positions 2 & 3",
    baseline: 10662 ,
    current: 11911,
  },
];

export const keyFindingsData: KeyFinding[] = [
  {
    title: "High-Quality Domain Profile",
    description:
      "68% of acquired domains fall in the DA 41–70 range (462 domains), representing the largest share of our portfolio. 21.7% are in the DA 30–40 range (147 domains). 10% are high authority DA 71–100 domains (69 domains).Summary: Over 78% of all referring domains are high-authority (DA 41+)",
  },
  {
    title: "Keyword Visibility",
    description:
"Between December 2025 and July 2026, the keywords experienced significant growth in rankings, with Top 3 positions increasing by 200% (from 5 to 15) and Page 1 rankings improving by 48% (from 25 to 37)"
  },
  {
    title: "Page Authority (PA) as a Leading Indicator",
    description:
      "Page Authority has improved for a few critical pages, such as ZTNA (48 → 53), Secops (48 → 50), Quantum Security (41  → 44), Cloud Security (49 → 52), Cloud Security ( 49  → 52), FortiAI (49 → 52) Cloud Data Protection (43  → 47), Application Security ( 41 → 46) & PQC ( 39  → 44). ",
  },
 {
  title: "Significant Keywords Improvement",
  description:
    'The keywords What is ZTNA (2), SASE (2), Firewall (2), what is cyber attack (3), OT Security (2), What is SecOps (2), AI Cybersecurity (2), Quantum Safe Security(1), Ruggedized firewall (1) showed significant improvement in search ranking.',
},
{
  title: "Strong Backlink Quality",
  description:
    '77% of acquired backlinks are indexed, indicating that the majority have been successfully discovered by search engines, reflecting strong backlink quality and healthy indexing performance',
},];
