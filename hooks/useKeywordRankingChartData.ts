import { REPORT_CONFIG } from "../constants/config";
import { BUSINESS_IMPACT_CHART } from "../constants/constants";
import { KeywordRankingPerformance, KeywordRankingChartData } from "../types";

export const useKeywordRankingChartData = (
  keywordRankingData?: KeywordRankingPerformance
) => {
  const createChartData = (
    startValue: number,
    middleValue: number,
    endValue: number
  ): KeywordRankingChartData[] => [
    {
      name: REPORT_CONFIG.reportPeriodStart,
      value: startValue,
    },
    {
      name: "September",
      value: middleValue,
    },
    {
      name: REPORT_CONFIG.reportPeriodEnd,
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
        keywordRankingData.top3.march,
        keywordRankingData.top3.september,
        keywordRankingData.top3.december
      )
    : [];

  const firstPageChartData: KeywordRankingChartData[] = keywordRankingData
    ? createChartData(
        keywordRankingData.firstPage.march,
        keywordRankingData.firstPage.september,
        keywordRankingData.firstPage.december
      )
    : [];

  const maxVal = keywordRankingData
    ? calculateMaxValue(
        keywordRankingData.top3.december,
        keywordRankingData.firstPage.december
      )
    : 0;

  return {
    top3ChartData,
    firstPageChartData,
    maxVal,
  };
};
