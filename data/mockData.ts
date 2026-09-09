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
  totalBacklinks: 816,
  keywordsTracked: 79,
  planTotalBacklinks: 1060,
};
import { getPerformanceStatus } from "../utils/performanceStatus";

export const backlinkGrowthData: BacklinkGrowth[] = [
  { month: "Jan '26", totalBacklinks: 50 },
  { month: "Feb '26", totalBacklinks: 153 },
  { month: "Mar '26", totalBacklinks: 211 },
  { month: "Apr '26", totalBacklinks: 285 },
  { month: "May '26", totalBacklinks: 390 },
  { month: "Jun '26", totalBacklinks: 425 },
   { month: "Jul'26", totalBacklinks: 678 },
    { month: "Aug '26", totalBacklinks: 816 },
];

export const keywordRankingPerformanceData = {
  top3: { december: 6, september: 8, march: 18 },
  firstPage: { december: 33, september: 29, march: 45 },
};

export const top3Keywords: KeywordPosition[] = [
  { name: "what is ztna", change: 5, rank: 2 },
  { name: "What is SD WAN", change: 5, rank: 3 },
  { name: "sase", change: 5, rank: 2 },
  { name: "what is sase", change: 9, rank: 2 },
  { name: "firewall", change: 5, rank: 2 },
  { name: "what is cyber attack", change: 6, rank: 2 },
  { name: "what is ot security", change: 5, rank: 3 },
  { name: "ot security", change: 7, rank: 2 },
  { name: "SD-WAN solutions", change: 78, rank: 1 },
  { name: "AI Cybersecurity", change: 1, rank: 2 },
  { name: "role of ai in cyber security", change: 100, rank: 1 },
  { name: "Post-Quantum Cryptography", change: -2, rank: 3 },
  { name: "Quantum Computing Security", change: 99, rank: 2 },
  { name: "Quantum Key Distribution", change: 2, rank: 2 },
  { name: "Quantum Safe Security", change: 0, rank: 3 },
  { name: "Unified SASE", change: 0, rank: 1 },
  { name: "Ruggedized firewall", change: 100, rank: 1 },
  { name: "soar automation", change: -1, rank: 3 },
];

export const firstPageKeywords: KeywordPosition[] = [
  { name: "what is ztna", change: 5, rank: 2 },
  { name: "ZTNA", change: 7, rank: 9 },
  { name: "what is network security", change: 10, rank: 5 },
  { name: "cybersecurity", change: 3, rank: 7 },
  { name: "What is SD WAN", change: 5, rank: 3 },
  { name: "sd wan", change: 0, rank: 6 },
  { name: "sase", change: 5, rank: 2 },
  { name: "what is sase", change: 9, rank: 2 },
  { name: "firewall", change: 5, rank: 2 },
  { name: "what is firewall", change: 3, rank: 5 },
  { name: "what is cyber attack", change: 6, rank: 2 },
  { name: "cyber attack", change: -2, rank: 9 },
  { name: "what is ot security", change: 5, rank: 3 },
  { name: "ot security", change: 7, rank: 2 },
  { name: "SD-WAN solutions", change: 78, rank: 1 },
  { name: "secure sd wan", change: 11, rank: 5 },
  { name: "what is secops", change: 17, rank: 5 },
  { name: "secops", change: 9, rank: 5 },
  { name: "what is ransomware", change: 1, rank: 8 },
  { name: "ransomware", change: -2, rank: 9 },
  { name: "casb", change: 3, rank: 7 },
  { name: "casb security", change: 10, rank: 8 },
  { name: "what is ai security", change: -1, rank: 8 },
  { name: "AI Security systems", change: 3, rank: 5 },
  { name: "AI Cybersecurity", change: 1, rank: 2 },
  { name: "role of ai in cyber security", change: 100, rank: 1 },
  { name: "Application security definition", change: 6, rank: 8 },
  { name: "PAM", change: -3, rank: 8 },
  { name: "Quantum Safe Encryption", change: -2, rank: 7 },
  { name: "cybersecurity in banking", change: 92, rank: 9 },
  { name: "cloud security vendors", change: 4, rank: 5 },
  { name: "cloud security providers", change: -2, rank: 7 },
  { name: "network monitoring", change: 11, rank: 10 },
  { name: "network monitoring system", change: 25, rank: 4 },
  { name: "pqc", change: 2, rank: 8 },
  { name: "Post-Quantum Cryptography", change: -2, rank: 3 },
  { name: "Quantum Computing Security", change: 99, rank: 2 },
  { name: "Quantum Key Distribution", change: 2, rank: 2 },
  { name: "Quantum Safe Security", change: 0, rank: 3 },
  { name: "Quantum Security", change: 3, rank: 5 },
  { name: "Unified SASE", change: 0, rank: 1 },
  { name: "Ruggedized firewall", change: 100, rank: 1 },
  { name: "AI Security", change: 93, rank: 8 },
  { name: "soar automation", change: -1, rank: 3 },
  { name: "siem solution", change: 3, rank: 8 },
];

export const allFirstPageKeywords: KeywordPosition[] = [
  ...top3Keywords,
  ...firstPageKeywords,
].sort((a, b) => a.rank - b.rank);

export const daDistributionData: DaDistribution[] = [
  { name: "DA 30-40", value: 158 },
  { name: "DA 41-70", value: 570 },
  { name: "DA 71-100", value: 88 },
];

export const performanceSummaryData: PerformanceSummaryData[] = [
  {
    url: "ZTNA",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-ztna",
    backlinkGrowth: 33,
    paChange: 5,
    bestKeywordMove: "what is ztna (+5)",
    worstKeywordMove: "-",
   
  },
  {
    url: "Network Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-network-security",
    backlinkGrowth:17,
    paChange: 0,
    bestKeywordMove: "what is network security (+10)",
    worstKeywordMove: "-",
    
  },
  {
    url: "Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cybersecurity",
    backlinkGrowth: 21,
    paChange: 1,
    bestKeywordMove: "cybersecurity (+3)",
    worstKeywordMove: "-",
   
  },
  {
    url: "SD-WAN",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/sd-wan-explained",
    backlinkGrowth: 26,
    paChange: 0,
    bestKeywordMove: "What is SD WAN(+5)",
    worstKeywordMove: "-",
   
  },
  {
    url: "SASE",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/sase",
    backlinkGrowth: 34,
    paChange: 0,
    bestKeywordMove: "what is sase (+9)",
    worstKeywordMove: "-",
  
  },
  {
    url: "Firewall",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/firewall",
    backlinkGrowth: 29,
    paChange: 0,
    bestKeywordMove: "firewall(+5)",
    worstKeywordMove: "-",
   
  },
  {
    url: "Cyber Attack",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-cyber-attack",
    backlinkGrowth: 1,
    paChange: 1,
    bestKeywordMove: "what is cyber attack (+6)",
    worstKeywordMove: "cyber attack(-2)",
   
  },

  {
    url: "OT Security",
    urlLink:
      "https://www.fortinet.com/solutions/industries/scada-industrial-control-systems/what-is-ot-security",
    backlinkGrowth: 24,
    paChange: 0,
    bestKeywordMove: "ot security (+7)",
    worstKeywordMove: "ot cyber security(-6)",
    
  },
  {
    url: "SD-WAN Products",
    urlLink: "https://www.fortinet.com/products/sd-wan",
    backlinkGrowth:18,
    paChange: 0,
    bestKeywordMove: "secure sd wan(+9)",
    worstKeywordMove: "sdwan solutions(-78)",
   
  },
  {
    url: "SecOps",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-secops",
    backlinkGrowth: 34,
    paChange: 2,
    bestKeywordMove: "what is secops (+17)",
    worstKeywordMove: "-",
   
  },
  {
    url: "Ransomware ",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ransomware",
    backlinkGrowth: 2,
    paChange: 1,
    bestKeywordMove: "what is ransomware (+1)",
    worstKeywordMove: "ransomware(-2)",
   
  },
  {
    url: "Quantum Security",
    urlLink: "https://www.fortinet.com/resources/hubs/quantum-security",
    backlinkGrowth: 2,
    paChange: 3,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
   
  },
  // {
  //   url: "Rugged Firewall",
  //   urlLink: "https://www.fortinet.com/products/rugged-firewall",
  //   backlinkGrowth: 6,
  //   paChange: 12,
  //   bestKeywordMove: "-",
  //   worstKeywordMove: "-",
    
  // },
  {
    url: "Cloud Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cloud-security",
    backlinkGrowth: 94,
    paChange: 3,
    bestKeywordMove: "-",
    worstKeywordMove: "what is cloud security (-4)",
   
  },
  {
    url: "CASB",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/casb",
    backlinkGrowth: 2,
    paChange: 1,
    bestKeywordMove: "casb security (+10)",
    worstKeywordMove: "-",
    
  },
  {
    url: "FortiAI",
    urlLink:
      "https://www.fortinet.com/solutions/enterprise-midsize-business/fortiai",
    backlinkGrowth: 8,
    paChange:3,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
   
  },
  {
    url: "AI Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ai-security",
    backlinkGrowth: 30,
    paChange: 1,
    bestKeywordMove: "AI Security systems (+3)",
    worstKeywordMove: "AI Security  (-3)",
    
  },
  {
    url: "Cyber Threat Intelligence",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cyber-threat-intelligence",
    backlinkGrowth: 12,
    paChange: 1,
    bestKeywordMove: "threat intelligence (+11)",
    worstKeywordMove: "-",
   
  },
  {
    url: "AI in Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/artificial-intelligence-in-cybersecurity",
    backlinkGrowth: 49,
    paChange: 0,
    bestKeywordMove: "role of ai in cyber security (+100)",
    worstKeywordMove: "AI cybersecurity (-1)",
  
  },
  {
    url: "Application Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/application-security",
    backlinkGrowth: 2,
    paChange: 5,
    bestKeywordMove: "Application security definition (+6)",
    worstKeywordMove: "Application security (-8)",
    
  },
  {
    url: "Cloud Data Protection",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cloud-data-protection",
    backlinkGrowth: 25,
    paChange: 4,
    bestKeywordMove: "Cloud Data Security(+19)",
    worstKeywordMove: "cloud data protetcion (-5)",
    
  },
  {
    url: "PAM",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/privileged-access-management",
    backlinkGrowth: 4,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "PAM(-3)",
   
  },
  {
    url: "Fortinet Homepage",
    urlLink: "https://www.fortinet.com/",
    backlinkGrowth: 23,
    paChange: 1,
    bestKeywordMove: "cybersecurity (+70)",
    worstKeywordMove: "-",
    
  },
  {
    url: "Quantum Safe Encryption",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/quantum-safe-encryption-safeguarding-data-for-the-quantum-era",
    backlinkGrowth: 6,
    paChange: -13,
    bestKeywordMove: "-",
    worstKeywordMove: "Quantum Safe Encryption (-2)",
   
  },
  {
    url: "Cyber Risk",
    urlLink:
      "https://www.fortinet.com/blog/business-and-technology/cyber-risk-is-a-business-risk",
    backlinkGrowth: 2,
    paChange: 2,
    bestKeywordMove: "-",
    worstKeywordMove: "cyber risk (-41)",
   
  },
  {
    url: "Banking Cybersecurity",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/cybersecurity-in-banking",
    backlinkGrowth: 1,
    paChange: 2,
    bestKeywordMove: "cybersecurity in banking (+92)",
    worstKeywordMove: "-",
   
  },
  {
  url: "Best Cloud Security Providers",
  urlLink: "https://www.fortinet.com/resources/articles/best-cloud-security-providers",
  backlinkGrowth: 17,
  paChange: -17,
  bestKeywordMove: "cloud security vendors (+4)",
  worstKeywordMove: "cloud security providers (-2)",
},

{
  url: "Network Monitoring",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/network-monitoring",
  backlinkGrowth: 14,
  paChange: 1,
  bestKeywordMove: "network monitoring system(+19)",
  worstKeywordMove: "-",
},

{
  url: "Shor’s & Grover’s Algorithms",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/shors-grovers-algorithms",
  backlinkGrowth: 24,
  paChange: 1,
  bestKeywordMove: "-",
  worstKeywordMove: "grover's algorithm (-95)",
},

{
  url: "Post-Quantum Cryptography",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/post-quantum-cryptography",
  backlinkGrowth: 22,
  paChange: 5,
  bestKeywordMove: "pqc (+2)",
  worstKeywordMove: "post-quantum cryptography(-2)",
},

{
  url: "Quantum Computing Security",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-computing-security",
  backlinkGrowth: 14,
  paChange: 1,
  bestKeywordMove: "Quantum Computing Security(+99)",
  worstKeywordMove: "-",
},

{
  url: "Quantum Key Distribution",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-key-distribution",
  backlinkGrowth: 19,
  paChange: -17,
  bestKeywordMove: "-",
  worstKeywordMove: "Quantum Key Distribution	(-2)",
},

{
  url: "Quantum Safe Security",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-safe-security",
  backlinkGrowth: 13,
  paChange: 5,
  bestKeywordMove: "-",
  worstKeywordMove: "-",
},

{
  url: "Quantum Security",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/quantum-security",
  backlinkGrowth: 16,
  paChange: 3,
  bestKeywordMove: "quantum security(+3)",
  worstKeywordMove: "-",
},

{
  url: "Security Operations Center (SOC)",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-soc",
  backlinkGrowth: 10,
  paChange: 1,
  bestKeywordMove: "-",
  worstKeywordMove: "-",
},

{
  url: "Unified SASE",
  urlLink: "https://www.fortinet.com/solutions/unified-sase",
  backlinkGrowth: 35,
  paChange: 7,
  bestKeywordMove: "-",
  worstKeywordMove: "-",
},
  {
  url: "Ruggedized firewall",
  urlLink: "https://www.fortinet.com/products/rugged",
  backlinkGrowth: 15,
  paChange: 0,
  bestKeywordMove: "Ruggedized firewall(+100)",
  worstKeywordMove: "industrial firewall (-99)",
},
  {
  url: "Zero Trust",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-zero-trust",
  backlinkGrowth:29,
  paChange: 0,
  bestKeywordMove: " what is zero trust (+55)",
  worstKeywordMove: "-",
},
  {
  url: "AI Security",
  urlLink: "https://www.fortinet.com/solutions/ai-security",
  backlinkGrowth: 4,
  paChange: 1,
  bestKeywordMove: "AI Security (+93)",
  worstKeywordMove: "-",
},  
  {
  url: "Cloud Security Services",
  urlLink: "https://www.fortinet.com/solutions/cloud-security/enterprise",
  backlinkGrowth: 26,
  paChange: 4,
  bestKeywordMove: "-",
  worstKeywordMove: "-",
}, 
 {
  url: "Soar",
  urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-soar",
  backlinkGrowth: 5,
  paChange: 0,
  bestKeywordMove: "-",
  worstKeywordMove: "soar automation (-1)",
}, 
{
  url: "Siem",
  urlLink: "https://www.fortinet.com/products/siem/fortisiem",
  backlinkGrowth: 24,
  paChange: 0,
  bestKeywordMove: "siem solution (+3)",
  worstKeywordMove: "siem products (-3)",
},
{
  url: "Security operations",
  urlLink: "https://www.fortinet.com/solutions/security-operations",
  backlinkGrowth: 10,
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
    current:  44804,
  },
  {
    name: "Position 1",
    baseline: 6085,
    current: 7165,
  },
  {
    name: "Positions 2 & 3",
    baseline: 10662 ,
    current: 12096,
  },
];

export const keyFindingsData: KeyFinding[] = [
  {
    title: "High-Quality Domain Profile",
    description:
      "69.9% of acquired domains fall in the DA 41–70 range (570 domains), representing the largest share of our portfolio. 19.4% are in the DA 30–40 range (158 domains), while 10.8% are high-authority DA 71–100 domains (88 domains). Summary: Over 80% of all referring domains are high-authority (DA 41+).",
  },
  {
    title: "Keyword Visibility",
    description:
"Between December 2025 and August 2026, keywords saw significant ranking growth, with Top 3 positions increasing by 200% (from 6 to 18) and Page 1 rankings improving by 36.4% (from 33 to 45)."
  },
  {
    title: "Page Authority (PA) as a Leading Indicator",
    description:
      "Page Authority has improved for a few critical pages, such as ZTNA (48 → 53), SecOps (48 → 50), Quantum Security (41 → 44), Cloud Security (49 → 52), Cloud Data Protection (43 → 47), Application Security (41 → 46), Unified SASE (37 → 44), and PQC (39 → 44).",
  },
 {
  title: "Significant Keywords Improvement",
  description:
    'The keywords ZTNA (9 ), SASE (2), SD-WAN solutions (1 ), Firewall ( 2), What is Cyber Attack (2), OT Security (2), AI Cybersecurity (2), AI Security (8), Cybersecurity in Banking (9), what is sase (2 ),  and Ruggedized Firewall (1) showed significant improvement in search ranking.',
},
{
  title: "Strong Backlink Quality",
  description:
    '79.6% of acquired backlinks are indexed, indicating that the majority have been successfully discovered by search engines, reflecting strong backlink quality and healthy indexing performance.',
},];
