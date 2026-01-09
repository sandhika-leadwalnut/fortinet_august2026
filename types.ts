export interface KpiData {
  urlsTracked: number;
  totalBacklinks: number;
  keywordsTracked: number;
  planTotalBacklinks: number;
}

export interface BacklinkGrowth {
  month: string;
  totalBacklinks: number;
}

export interface KeywordRankingPerformance {
  top3: { march: number; september: number; december: number };
  firstPage: { march: number; september: number; december: number };
}

export interface KeywordPosition {
  name: string;
  change: number;
  rank: number;
}

export interface DaDistribution {
  name: string;
  value: number;
}

export interface PerformanceSummaryData {
  url: string;
  urlLink?: string;
  backlinkGrowth: number;
  paChange: number;
  bestKeywordMove: string | null;
  worstKeywordMove: string | null;
  status: "Good" | "Needs Attention";
}

export interface BusinessImpactData {
  category: string;
  baseline: number;
  current: number;
  improvement: number;
  color: string;
}

export interface KeyFinding {
  title: string;
  description: string;
}

export interface BusinessImpactCategory {
  name: string;
  baseline: number;
  current: number;
  growth?: string;
}

export interface KeywordRankingChartData {
  name: string;
  value: number;
}

export interface BusinessImpactChartProps {
  keywordRankingData?: KeywordRankingPerformance;
}
