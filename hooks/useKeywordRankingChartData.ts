import { REPORT_CONFIG } from "../constants/config";
import { BUSINESS_IMPACT_CHART } from "../constants/constants";
import { KeywordRankingPerformance, KeywordRankingChartData } from "../types";

export const useKeywordRankingChartData = (
  keywordRankingData?: KeywordRankingPerformance
) => {
  const createChartData = (
  startValue: number,
  endValue: number
): KeywordRankingChartData[] => [
  {
    name: REPORT_CONFIG.reportPeriodStart, // December
    value: startValue,
  },
  {
    name: REPORT_CONFIG.reportPeriodEnd, // March
    value: endValue,
  },
];

  const calculateMaxValue = (
    top3Value: number,
    firstPageValue: number
  ): number => {
    const maxValue = Math.max(top3Value, firstPageValue);
    return (
      Math.ceil(
        (maxValue *
          BUSINESS_IMPACT_CHART.growthMultipliers.maxValueMultiplier) /
          BUSINESS_IMPACT_CHART.growthMultipliers.roundingDivisor
      ) * BUSINESS_IMPACT_CHART.growthMultipliers.roundingDivisor
    );
  };

  const top3ChartData: KeywordRankingChartData[] = keywordRankingData
    ? createChartData(
        keywordRankingData.top3.december,
  
        keywordRankingData.top3.march
    )
    : [];

  const firstPageChartData: KeywordRankingChartData[] = keywordRankingData
    ? createChartData(

        keywordRankingData.firstPage.december,
          keywordRankingData.firstPage.march
      )
    : [];

  const maxVal = keywordRankingData
  ? calculateMaxValue(
      Math.max(
        keywordRankingData.top3.december,
        keywordRankingData.top3.march
      ),
      Math.max(
        keywordRankingData.firstPage.december,
        keywordRankingData.firstPage.march
      )
    )
  : 0;

  return {
    top3ChartData,
    firstPageChartData,
    maxVal,
  };
};
