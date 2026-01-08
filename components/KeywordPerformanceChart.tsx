import { ReactNode } from "react";
import { KeywordRankingPerformance, KeywordPosition } from "../types";
import { FileIcon, TrophyIcon } from "./icons";
import { KeywordListCard } from "./KeywordListCard";

interface KeywordPerformanceChartProps {
  data: KeywordRankingPerformance;
  top3Data: KeywordPosition[];
  allFirstPageData: KeywordPosition[];
}

const KeywordPerformanceChart = ({
  data,
  top3Data,
  allFirstPageData,
}: KeywordPerformanceChartProps) => {
  const uniqueTop3Data = top3Data
    .filter(
      (item: KeywordPosition, index: number, arr: KeywordPosition[]) =>
        arr.findIndex((t: KeywordPosition) => t.name === item.name) === index
    )
    .sort((a, b) => a.rank - b.rank);

  const uniqueFirstPageData = allFirstPageData
    .filter(
      (item: KeywordPosition, index: number, arr: KeywordPosition[]) =>
        arr.findIndex(
          (t: KeywordPosition) =>
            t.name === item.name &&
            t.change === item.change &&
            t.rank === item.rank
        ) === index
    )
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <KeywordListCard
          title="Keywords in Top 3 Positions"
          data={uniqueTop3Data}
          icon={<TrophyIcon className="w-6 h-6 text-[#FFB800]" />}
        />
        <KeywordListCard
          title="Keywords on First Page"
          data={uniqueFirstPageData}
          icon={<FileIcon className="w-6 h-6 text-[#000000]" />}
        />
      </div>
    </div>
  );
};

export default KeywordPerformanceChart;
