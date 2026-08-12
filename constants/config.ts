/**
 * Monthly Report Configuration
 *
 * ⚠️ UPDATE THESE VALUES EVERY MONTH ⚠️
 *
 * This file contains all date-related configuration that changes monthly.
 * Update all values here when generating a new monthly report.
 */

export const REPORT_CONFIG = {
  reportDate: "August 12 2026",

  reportPeriodStart: "December 2025",
  reportPeriodEnd: "July 2026",
  reportPeriodDisplay: "December 2025 - July 2026",
  baselinePeriod: "Dec'25",
  currentPeriod: "July '26",
  monthOrder: [
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "february",
    "March",
    "April",
    "May",
    "June",
    "july",
  ],

  comparisonStartMonth: "Dec",
  comparisonEndMonth: "July",

  comparisonStartMonthAbbr: "Dec",
  comparisonEndMonthAbbr: "July",

  baselineMonthAbbr: "Dec",
  currentMonthAbbr: "July",
};

export const getMonthRange = (start: string, end: string) => {
  return `${start}-${end}`;
};

export const formatReportDate = () => {
  return REPORT_CONFIG.reportDate;
};

export const formatReportPeriod = () => {
  return REPORT_CONFIG.reportPeriodDisplay;
};
