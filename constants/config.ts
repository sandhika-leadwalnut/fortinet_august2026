/**
 * Monthly Report Configuration
 *
 * ⚠️ UPDATE THESE VALUES EVERY MONTH ⚠️
 *
 * This file contains all date-related configuration that changes monthly.
 * Update all values here when generating a new monthly report.
 */

export const REPORT_CONFIG = {
  reportDate: "Jan,10 2025",

  reportPeriodStart: "March 2025",
  reportPeriodEnd: "December 2025",
  reportPeriodDisplay: "March -December 2025",
  baselinePeriod: "Dec'24",
  currentPeriod: "Dec'25",
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
  ],

  comparisonStartMonth: "March",
  comparisonEndMonth: "December",

  comparisonStartMonthAbbr: "Mar",
  comparisonEndMonthAbbr: "Dec",

  baselineMonthAbbr: "Dec",
  currentMonthAbbr: "Nov",
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
