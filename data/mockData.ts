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
  urlsTracked: 32,
  totalBacklinks: 979,
  keywordsTracked: 64,
  planTotalBacklinks: 1200,
};
import { getPerformanceStatus } from "../utils/performanceStatus";

export const backlinkGrowthData: BacklinkGrowth[] = [
  { month: "Mar '25", totalBacklinks: 34 },
  { month: "Apr '25", totalBacklinks: 112 },
  { month: "May '25", totalBacklinks: 228 },
  { month: "Jun '25", totalBacklinks: 262 },
  { month: "Jul '25", totalBacklinks: 355 },
  { month: "Aug '25", totalBacklinks: 454 },
  { month: "Sep '25", totalBacklinks: 536 },
  { month: "Oct '25", totalBacklinks: 670 },
  { month: "Nov '25", totalBacklinks: 768 },
  { month: "Dec '25", totalBacklinks: 979},
];

export const keywordRankingPerformanceData: KeywordRankingPerformance = {
  top3: { march: 5, september: 8, december: 1 },
  firstPage: { march: 20, september: 29, december: 24 },
};

export const top3Keywords: KeywordPosition[] = [
  
  { name: "AI Cybersecurity", change: 8, rank: 3 },
 
];

export const firstPageKeywords: KeywordPosition[] = [
  { name: "AI Cybersecurity", change: 8, rank: 3 },
  { name: "iot security", change: -1, rank: 4 },
  { name: "what is iot security", change: 0, rank: 4 },
  {name:"PAM", change:2, rank:5},
  { name: "sd wan", change: 6, rank: 6 },
  { name: "what is malware", change: 3, rank: 6 },
  { name: "what is ztna", change: 5, rank: 7},
  { name: "sase", change: -4, rank: 7 },
  { name: "firewall", change: 0, rank: 7 },
  { name: "cyber attack", change: 7, rank: 7 },
   { name: "ransomware", change: 4, rank: 7},
  { name: "What is SD WAN", change: -3, rank: 8 },
  { name: "what is firewall", change: 0, rank: 8 },
  { name: "what is cyber attack", change: -2, rank: 8 },
  { name: "what is ot security", change: -5, rank: 8 },
  { name: "malware", change: 1, rank: 8 },
  { name: "what is endpoint security", change: -4, rank: 8 },
   { name: "AI Security", change: 93, rank: 8 },
  { name: "AI Security systems", change: 93, rank: 8 },
 { name: "ot security", change: -7, rank: 9 },
   { name: "endpoint security", change: -5, rank: 9 },
  { name: "what is ransomware", change: 3, rank: 9 },
  { name: "cybersecurity", change: 6, rank: 10 },
  { name: "casb", change: -5, rank: 10 },
 
  

];

export const allFirstPageKeywords: KeywordPosition[] = [
  ...top3Keywords,
  ...firstPageKeywords,
].sort((a, b) => a.rank - b.rank);

export const daDistributionData: DaDistribution[] = [
  { name: "DA 30-40", value: 154 },
  { name: "DA 41-70", value: 692 },
  { name: "DA 71-100", value: 133 },
];

export const performanceSummaryData: PerformanceSummaryData[] = [
  {
    url: "ZTNA",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-ztna",
    backlinkGrowth: 45,
    paChange: 7,
    bestKeywordMove: "what is ztna (+5)",
    worstKeywordMove: "ZTNA (-8)",
   
  },
  {
    url: "Network Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-network-security",
    backlinkGrowth: 39,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: "what is network security (-11)",
    
  },
  {
    url: "Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cybersecurity",
    backlinkGrowth: 31,
    paChange: 1,
    bestKeywordMove: "cybersecurity (+6)",
    worstKeywordMove: "-",
   
  },
  {
    url: "SD-WAN",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/sd-wan-explained",
    backlinkGrowth: 63,
    paChange: 1,
    bestKeywordMove: "sd wan (+6)",
    worstKeywordMove: "What is SD WAN(-3)",
   
  },
  {
    url: "SASE",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/sase",
    backlinkGrowth: 63,
    paChange: 0,
    bestKeywordMove: "",
    worstKeywordMove: "what is sase (-7)",
  
  },
  {
    url: "Firewall",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/firewall",
    backlinkGrowth: 88,
    paChange: 2,
    bestKeywordMove: "",
    worstKeywordMove: "-",
   
  },
  {
    url: "Cyber Attack",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cyber-attack",
    backlinkGrowth: 35,
    paChange: 1,
    bestKeywordMove: "cyber attack (+7)",
    worstKeywordMove: "what is cyber attack	 (-2)",
   
  },
  {
    url: "IoT Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/iot-security",
    backlinkGrowth: 27,
    paChange: 0,
    bestKeywordMove: "what is iot security (0)",
    worstKeywordMove: "iot security (-1)",
   
  },
  {
    url: "Ransomware Hub",
    urlLink: "https://www.fortinet.com/ransomware-hub",
    backlinkGrowth: 22,
    paChange: -8,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    
  },
  {
    url: "OT Security",
    urlLink:
      "https://www.fortinet.com/solutions/industries/scada-industrial-control-systems/what-is-ot-security",
    backlinkGrowth: 25,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: " ot security (-7)",
    
  },
  {
    url: "Malware",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/malware",
    backlinkGrowth: 62,
    paChange: 0,
    bestKeywordMove: "what is malware (+3)",
    worstKeywordMove: "malware(-1)",
    
  },
  {
    url: "Endpoint Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-endpoint-security",
    backlinkGrowth: 22,
    paChange: 0,
    bestKeywordMove: "",
    worstKeywordMove: "endpoint security (-5)",
    
  },
  {
    url: "SD-WAN Products",
    urlLink: "https://www.fortinet.com/products/sd-wan",
    backlinkGrowth: 27,
    paChange: 1,
    bestKeywordMove: "-",
    worstKeywordMove: "SD-WAN solutions (-60)",
   
  },
  {
    url: "SecOps",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/what-is-secops",
    backlinkGrowth: 46,
    paChange: 7,
    bestKeywordMove: "-",
    worstKeywordMove: "what is secops (-20)",
   
  },
  {
    url: "Ransomware Page",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ransomware",
    backlinkGrowth: 49,
    paChange: 2,
    bestKeywordMove: "ransomware (+4)",
    worstKeywordMove: "-",
   
  },
  {
    url: "Quantum Security",
    urlLink: "https://www.fortinet.com/resources/hubs/quantum-security",
    backlinkGrowth: 10,
    paChange: 4,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
   
  },
  {
    url: "Rugged Firewall",
    urlLink: "https://www.fortinet.com/products/rugged-firewall",
    backlinkGrowth: 18,
    paChange: -11,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    
  },
  {
    url: "Cloud Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/what-is-cloud-security",
    backlinkGrowth: 59,
    paChange: 2,
    bestKeywordMove: "cloud security (+9)",
    worstKeywordMove: "what is cloud security(-8)",
   
  },
  {
    url: "CASB",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/casb",
    backlinkGrowth: 17,
    paChange: -11,
    bestKeywordMove: "casb security (+83)",
    worstKeywordMove: "casb (-5)",
    
  },
  {
    url: "FortiAI",
    urlLink:
      "https://www.fortinet.com/solutions/enterprise-midsize-business/fortiai",
    backlinkGrowth: 34,
    paChange: 12,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
   
  },
  {
    url: "AI Security",
    urlLink: "https://www.fortinet.com/resources/cyberglossary/ai-security",
    backlinkGrowth: 11,
    paChange: 15,
    bestKeywordMove: "AI Security systems (+93)",
    worstKeywordMove: "-",
    
  },
  {
    url: "Cyber Threat Intelligence",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cyber-threat-intelligence",
    backlinkGrowth: 13,
    paChange: 1,
    bestKeywordMove: "threat intelligence (+26)",
    worstKeywordMove: "-",
   
  },
  {
    url: "AI in Cybersecurity",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/artificial-intelligence-in-cybersecurity",
    backlinkGrowth: 4,
    paChange: 3,
    bestKeywordMove: "AI Cybersecurity (+8)",
    worstKeywordMove: "role of ai in cyber security(-99)",
  
  },
  {
    url: "Application Security",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/application-security",
    backlinkGrowth: 20,
    paChange: 4,
    bestKeywordMove: "Application security definition (+87)",
    worstKeywordMove: "-",
    
  },
  {
    url: "Cloud Data Protection",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cloud-data-protection",
    backlinkGrowth: 19,
    paChange: 1,
    bestKeywordMove: "Data security in the cloud (+32)",
    worstKeywordMove: "Cloud Data Security(-19)",
    
  },
  {
    url: "PAM",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/privileged-access-management",
    backlinkGrowth: 8,
    paChange: 1,
    bestKeywordMove: "PAM (+2)",
    worstKeywordMove: "-",
   
  },
  {
    url: "Fortinet Homepage",
    urlLink: "https://www.fortinet.com/",
    backlinkGrowth: 23,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    
  },
  {
    url: "Quantum Safe Encryption",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/quantum-safe-encryption-safeguarding-data-for-the-quantum-era",
    backlinkGrowth: 13,
    paChange: 0,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
   
  },
  {
    url: "Cloud Security Tips",
    urlLink:
      "https://www.fortinet.com/resources/cyberglossary/cloud-security-tips",
    backlinkGrowth: 11,
    paChange: 3,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
   
  },
  {
    url: "Cyber Risk",
    urlLink:
      "https://www.fortinet.com/blog/business-and-technology/cyber-risk-is-a-business-risk",
    backlinkGrowth: 11,
    paChange: 3,
    bestKeywordMove: "cyber risk(+16)",
    worstKeywordMove: "-",
   
  },
   {
    url: "Ai Governance",
    urlLink:
      "https://www.fortinet.com/blog/ciso-collective/ai-governance-building-a-responsible-foundation-for-innovation",
    backlinkGrowth: 13,
    paChange: 8,
    bestKeywordMove: "-",
    worstKeywordMove: "-",
    
  },
  {
    url: "Banking Cybersecurity",
    urlLink:
      "https://www.fortinet.com/blog/industry-trends/cybersecurity-in-banking",
    backlinkGrowth: 13,
    paChange: 4,
    bestKeywordMove: "-",
    worstKeywordMove: "cybersecurity in banking(-76)",
   
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
    baseline: 30600,
    current: 41293,
  },
  {
    name: "Position 1",
    baseline: 4545,
    current: 4504,
  },
  {
    name: "Positions 2 & 3",
    baseline: 5085,
    current: 8208,
  },
];

export const keyFindingsData: KeyFinding[] = [
  {
    title: "High-Quality Domain Profile",
    description:
      "71% of acquired domains fall in the DA 41–70 range (692 domains), representing the largest share of our portfolio. 16% are in the DA 30–40 range (154 domains).13% are elite-tier DA 71–100 domains (133 domains).Summary: Over 84% of all referring domains are high-authority (DA 41+).",
  },
  {
    title: "Keyword Visibility",
    description:
      "37.5% of tracked keywords (24 out of 64) are currently ranking on Page 1.",
  },
  {
    title: "Link Building Velocity",
    description:
      "Acquired 211 new backlinks in December, maintaining a strong and healthy acquisition rate.",
  },
  {
    title: "Ranking Trend",
    description:
      "Despite the high volume of quality backlink acquisition, overall rankings experienced a decline during the month of December.",
  },
];
