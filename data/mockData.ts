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
  urlsTracked: 29,
  totalBacklinks: 752,
  keywordsTracked: 58,
  planTotalBacklinks: 840,
};

export const backlinkGrowthData: BacklinkGrowth[] = [
  { month: "Mar '25", totalBacklinks: 33 },
  { month: "Apr '25", totalBacklinks: 108 },
  { month: "May '25", totalBacklinks: 221 },
  { month: "Jun '25", totalBacklinks: 255 },
  { month: "Jul '25", totalBacklinks: 345 },
  { month: "Aug '25", totalBacklinks: 441 },
  { month: "Sep '25", totalBacklinks: 522 },
  { month: "Oct '25", totalBacklinks: 654 },
  { month: "Nov '25", totalBacklinks: 752 },
];

export const keywordRankingPerformanceData: KeywordRankingPerformance = {
  top3: { march: 5, september: 8, november: 14 },
  firstPage: { march: 20, september: 29, november: 35 },
};

export const top3Keywords: KeywordPosition[] = [
  { name: "what is ztna", change: 10, rank: 2 },
  { name: "sd wan", change: 9, rank: 3 },
  { name: "sase", change: 0, rank: 3 },
  { name: "what is sase", change: 1, rank: 3 },
  { name: "iot security", change: 1, rank: 2 },
  { name: "what is iot security", change: 2, rank: 2 },
  { name: "ot security", change: -1, rank: 3 },
  { name: "endpoint security", change: 1, rank: 3 },
  { name: "what is endpoint security", change: 1, rank: 3 },
  { name: "what is secops", change: -1, rank: 3 },
  { name: "quantum security", change: 100, rank: 1 },
  { name: "Types of threat intelligence", change: 100, rank: 1 },
  { name: "AI Cybersecurity", change: 8, rank: 3 },
  { name: "role of ai in cyber security", change: 1, rank: 1 },
];

export const firstPageKeywords: KeywordPosition[] = [
  { name: "what is ztna", change: 10, rank: 2 },
  { name: "what is network security", change: -3, rank: 7 },
  { name: "network security", change: -1, rank: 5 },
  { name: "what is cybersecurity", change: 4, rank: 8 },
  { name: "cybersecurity", change: 7, rank: 9 },
  { name: "What is SD WAN", change: 0, rank: 5 },
  { name: "sd wan", change: 9, rank: 3 },
  { name: "sase", change: 0, rank: 3 },
  { name: "what is sase", change: 1, rank: 3 },
  { name: "firewall", change: 3, rank: 4 },
  { name: "what is firewall", change: 4, rank: 4 },
  { name: "what is cyber attack", change: 2, rank: 4 },
  { name: "iot security", change: 1, rank: 2 },
  { name: "what is iot security", change: 2, rank: 2 },
  { name: "what is ot security", change: -1, rank: 4 },
  { name: "ot security", change: -1, rank: 3 },
  { name: "malware", change: 2, rank: 7 },
  { name: "what is malware", change: 2, rank: 7 },
  { name: "endpoint security", change: 1, rank: 3 },
  { name: "what is endpoint security", change: 1, rank: 3 },
  { name: "SD-WAN solutions", change: 11, rank: 8 },
  { name: "sdwan solutions", change: 3, rank: 8 },
  { name: "what is secops", change: -1, rank: 3 },
  { name: "secops", change: 3, rank: 5 },
  { name: "what is ransomware", change: 7, rank: 5 },
  { name: "ransomware", change: 5, rank: 6 },
  { name: "quantum security", change: 100, rank: 1 },
  { name: "what is cloud security", change: 1, rank: 10 },
  { name: "casb", change: 0, rank: 5 },
  { name: "casb security", change: 94, rank: 7 },
  { name: "AI Security systems", change: 97, rank: 4 },
  { name: "Types of threat intelligence", change: 100, rank: 1 },
  { name: "AI Cybersecurity", change: 8, rank: 3 },
  { name: "role of ai in cyber security", change: 1, rank: 1 },
  { name: "Privileged Access Management", change: 3, rank: 10 },
];

export const allFirstPageKeywords: KeywordPosition[] = [
  ...top3Keywords,
  ...firstPageKeywords,
].sort((a, b) => a.rank - b.rank);

export const daDistributionData: DaDistribution[] = [
  { name: "DA 30-40", value: 105 },
  { name: "DA 41-70", value: 529 },
  { name: "DA 71-100", value: 118 },
];

export const performanceSummaryData: PerformanceSummaryData[] = [
  {
    url: "ZTNA",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-ztna",
    backlinkGrowth: 44,
    paChange: 7,
    bestKeywordMove: "what is ztna (+10)",
    worstKeywordMove: "ZTNA (-3)",
    status: "Good",
  },
  {
    url: "Network Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-network-security",
    backlinkGrowth: 39,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: "what is network security (-3)",
    status: "Needs Attention",
  },
  {
    url: "Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cybersecurity",
    backlinkGrowth: 31,
    paChange: 1,
    bestKeywordMove: "cybersecurity (+7)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "SD-WAN",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/sd-wan-explained",
    backlinkGrowth: 63,
    paChange: 1,
    bestKeywordMove: "sd wan (+9)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "SASE",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/sase",
    backlinkGrowth: 58,
    paChange: 0,
    bestKeywordMove: "what is sase (+1)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Firewall",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/firewall",
    backlinkGrowth: 79,
    paChange: 2,
    bestKeywordMove: "what is firewall (+4)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Cyber Attack",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cyber-attack",
    backlinkGrowth: 35,
    paChange: 1,
    bestKeywordMove: "cyber attack (+3)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "IoT Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/iot-security",
    backlinkGrowth: 27,
    paChange: 0,
    bestKeywordMove: "what is iot security (+2)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Ransomware Hub",
    urlLink: "https://www.fortinet.com/ransomware-hub",
    backlinkGrowth: 20,
    paChange: -8,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    status: "Needs Attention",
  },
  {
    url: "OT Security",
    urlLink:
      "https://www.fortinet.com/solutions/industries/scada-industrial-control-systems/what-is-ot-security",
    backlinkGrowth: 23,
    paChange: 1,
    bestKeywordMove: "ot security (+1)",
    worstKeywordMove: "what is ot security (-1)",
    status: "Needs Attention",
  },
  {
    url: "Malware",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/malware",
    backlinkGrowth: 42,
    paChange: 0,
    bestKeywordMove: "what is malware (+2)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Endpoint Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-endpoint-security",
    backlinkGrowth: 22,
    paChange: 0,
    bestKeywordMove: "endpoint security (+1)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "SD-WAN Products",
    urlLink: "https://www.fortinet.com/products/sd-wan",
    backlinkGrowth: 21,
    paChange: 1,
    bestKeywordMove: "SD-WAN solutions (+11)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "SecOps",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-secops",
    backlinkGrowth: 44,
    paChange: 7,
    bestKeywordMove: "secops (+3)",
    worstKeywordMove: "what is secops (-1)",
    status: "Good",
  },
  {
    url: "Ransomware Page",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ransomware",
    backlinkGrowth: 35,
    paChange: 2,
    bestKeywordMove: "what is ransomware (+7)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Quantum Security",
    urlLink: "https://www.fortinet.com/resources/hubs/quantum-security",
    backlinkGrowth: 1,
    paChange: 4,
    bestKeywordMove: "quantum security (+100)",
    worstKeywordMove: "quantum security solutions (0)",
    status: "Good",
  },
  {
    url: "Rugged Firewall",
    urlLink: "https://www.fortinet.com/products/rugged-firewall",
    backlinkGrowth: 16,
    paChange: -11,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    status: "Needs Attention",
  },
  {
    url: "Cloud Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cloud-security",
    backlinkGrowth: 33,
    paChange: 2,
    bestKeywordMove: "cloud security (+10)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "CASB",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/casb",
    backlinkGrowth: 15,
    paChange: -11,
    bestKeywordMove: "casb security (+94)",
    worstKeywordMove: "casb (0)",
    status: "Needs Attention",
  },
  {
    url: "FortiAI",
    urlLink:
      "https://www.fortinet.com/solutions/enterprise-midsize-business/fortiai",
    backlinkGrowth: 19,
    paChange: 12,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    status: "Needs Attention",
  },
  {
    url: "AI Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ai-security",
    backlinkGrowth: 6,
    paChange: 15,
    bestKeywordMove: "AI Security systems (+97)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Cyber Threat Intelligence",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cyber-threat-intelligence",
    backlinkGrowth: 9,
    paChange: 1,
    bestKeywordMove: "Types of threat intelligence (+100)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "AI in Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/artificial-intelligence-in-cybersecurity",
    backlinkGrowth: 4,
    paChange: 3,
    bestKeywordMove: "AI Cybersecurity (+8)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Application Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/application-security",
    backlinkGrowth: 7,
    paChange: 4,
    bestKeywordMove: "Application security definition (+90)",
    worstKeywordMove: "-",
    status: "Good",
  },
  {
    url: "Cloud Data Protection",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cloud-data-protection",
    backlinkGrowth: 6,
    paChange: 1,
    bestKeywordMove: "Data security in the cloud (+39)",
    worstKeywordMove: "-",
    status: "Needs Attention",
  },
  {
    url: "PAM",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/privileged-access-management",
    backlinkGrowth: 6,
    paChange: 1,
    bestKeywordMove: "Privileged Access Management (+3)",
    worstKeywordMove: "PAM (-94)",
    status: "Good",
  },
  {
    url: "Fortinet Homepage",
    urlLink: "https://www.fortinet.com/",
    backlinkGrowth: 3,
    paChange: 0,
    bestKeywordMove: "Cybersecurity (+33)",
    worstKeywordMove: "What is Cybersecurity (0)",
    status: "Needs Attention",
  },
  {
    url: "Quantum Safe Encryption",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/quantum-safe-encryption-safeguarding-data-for-the-quantum-era",
    backlinkGrowth: 2,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    status: "Needs Attention",
  },
  {
    url: "Cloud Security Tips",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cloud-security-tips",
    backlinkGrowth: 3,
    paChange: 3,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    status: "Needs Attention",
  },
];

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
    baseline: 30600,
    current: 41271,
  },
  {
    name: "Position 1",
    baseline: 6288,
    current: 6490,
  },
  {
    name: "Positions 2 & 3",
    baseline: 7460,
    current: 10614,
  },
];

export const keyFindingsData: KeyFinding[] = [
  {
    title: "High-DA Links Drive Success",
    description:
      "With 86% of referring domains coming from DA 41+ sources (118 in DA 71–100 and 529 in DA 41–70), the link profile is strongly quality-driven and positioned to continuously elevate search visibility.",
  },
  {
    title: "Clear Correlation Between Links and Rankings",
    description:
      "Pages with consistent and high-volume link acquisition the Firewall page (64 backlinks) and SD-WAN page (57 backlinks) successfully pushed competitive keywords into stable Top 5 positions.",
  },
  {
    title: "Explosive Growth for 'Fresh' Target URLs",
    description:
      "Newer and previously unranked pages saw massive jumps with minimal initial backlinking. AI Security jumped +73 positions with just 3 backlinks, and Application Security moved +90 positions after receiving only 5 backlinks.",
  },
  {
    title: "Dominance in 'What Is' Informational Queries",
    description:
      "The strategy is highly effective at capturing top-of-funnel traffic. 'What is ZTNA' jumped +10 positions to #2, 'AI Cybersecurity' climbed +9 positions to #2, and 'what is ransomware' surged +93 positions to reach #8.",
  },
];
