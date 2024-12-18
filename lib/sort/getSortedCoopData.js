import { getCoop } from "../../pages/api/co-op";
import { sortByDescendingValue, createBoxPlotData } from "./sortFunctions";

export async function getSortedCoopData() {
  const data = await getCoop();
  const round = {};
  const jobPlatform = {};
  const jobType = {};
  const location = {};
  const payVsSatisfaction = [];
  const averageRanges = [
    { min: 65, max: 69 },
    { min: 70, max: 74 },
    { min: 75, max: 79 },
    { min: 80, max: 84 },
    { min: 85, max: 89 },
    { min: 90, max: 94 },
    { min: 95, max: 100 },
  ];
  const averageVsPay = {};
  const jobTypeVsPay = {};

  for (var object in data) {
    if (data[object].round in round) {
      round[data[object].round] += 1;
    } else if (data[object].round) {
      round[data[object].round] = 1;
    }

    if (data[object].jobPlatform in jobPlatform) {
      jobPlatform[data[object].jobPlatform] += 1;
    } else if (data[object].jobPlatform) {
      jobPlatform[data[object].jobPlatform] = 1;
    }

    if (data[object].jobType in jobType) {
      jobType[data[object].jobType] += 1;
    } else if (data[object].jobType) {
      jobType[data[object].jobType] = 1;
    }

    if (data[object].location in location) {
      location[data[object].location] += 1;
    } else if (data[object].location) {
      location[data[object].location] = 1;
    }

    if (
      data[object].pay &&
      data[object].pay != 0 &&
      data[object].satisfaction
    ) {
      payVsSatisfaction.push([
        data[object].pay,
        parseInt(data[object].satisfaction),
      ]);
    }

    // only count paid jobs
    if (data[object].average && data[object].pay && data[object].pay != 0) {
      for (let i = 0; i < averageRanges.length; i++) {
        const range = averageRanges[i];
        if (
          data[object].average >= range.min &&
          data[object].average <= range.max
        ) {
          if (!averageVsPay[range.min]) {
            averageVsPay[range.min] = [parseFloat(data[object].pay)];
          } else {
            averageVsPay[range.min].push(parseFloat(data[object].pay));
          }
        }
        if (averageVsPay[range.min] == null) {
          averageVsPay[range.min] = 0;
        }
      }
    }

    if (data[object].jobType && data[object].pay && data[object].pay != 0) {
      if (data[object].jobType in jobTypeVsPay) {
        jobTypeVsPay[data[object].jobType].push(parseFloat(data[object].pay));
      } else {
        jobTypeVsPay[data[object].jobType] = [parseFloat(data[object].pay)];
      }
    }
  }

  const rounds = Object.keys(sortByDescendingValue(round));
  const roundValues = Object.values(sortByDescendingValue(round));
  const roundRespondents = roundValues.reduce((a, b) => a + b, 0);

  const jobPlatforms = Object.keys(sortByDescendingValue(jobPlatform));
  const jobPlatformValues = Object.values(sortByDescendingValue(jobPlatform));
  const jobPlatformRespondents = jobPlatformValues.reduce((a, b) => a + b, 0);

  const jobTypes = Object.keys(sortByDescendingValue(jobType));
  const jobTypeValues = Object.values(sortByDescendingValue(jobType));
  const jobTypeRespondents = jobTypeValues.reduce((a, b) => a + b, 0);

  const locations = Object.keys(sortByDescendingValue(location));
  const locationValues = Object.values(sortByDescendingValue(location));
  const locationRespondents = locationValues.reduce((a, b) => a + b, 0);

  const payVsSatisfactionRespondents = payVsSatisfaction.length;

  let averageVsPayRespondents = 0;
  for (let key in averageVsPay) {
    averageVsPayRespondents += averageVsPay[key].length;
    averageVsPay[key] = createBoxPlotData(averageVsPay[key]);
  }

  let jobTypeVsPayRespondents = 0;
  for (let key in jobTypeVsPay) {
    jobTypeVsPayRespondents += jobTypeVsPay[key].length;
    jobTypeVsPay[key] = createBoxPlotData(jobTypeVsPay[key]);
  }

  return {
    rounds,
    roundValues,
    roundRespondents,
    jobPlatforms,
    jobPlatformValues,
    jobPlatformRespondents,
    jobTypes,
    jobTypeValues,
    jobTypeRespondents,
    locations,
    locationValues,
    locationRespondents,
    payVsSatisfaction,
    payVsSatisfactionRespondents,
    averageVsPay,
    averageVsPayRespondents,
    jobTypeVsPay,
    jobTypeVsPayRespondents,
  };
}
