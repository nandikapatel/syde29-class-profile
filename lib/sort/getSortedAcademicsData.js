import { getAcademics } from "../../pages/api/academics/index";
import {
  sortByDescendingValue,
  createBoxPlotData,
  concatenateStringToKeys,
  sortByAscendingKey,
  insertMissingIntegerKeys,
  insertMissingStringKeys,
  assignKeyRanges,
  reorderObjectKeys,
} from "./sortFunctions";

export async function getSortedAcademicsData() {
  const data = await getAcademics();
  const uniAverage = {};
  const uniAverageRanges = [
    { min: 51, max: 55 },
    { min: 56, max: 60 },
    { min: 61, max: 65 },
    { min: 66, max: 70 },
    { min: 71, max: 75 },
    { min: 76, max: 80 },
    { min: 81, max: 85 },
    { min: 86, max: 90 },
    { min: 91, max: 95 },
    { min: 96, max: 100 },
  ];
  const enrich = {};
  const enrichVsAverage = {};
  const highschoolAverageRanges = [
    // { min: 89, max: 90 },
    { min: 91, max: 92 },
    { min: 93, max: 94 },
    { min: 95, max: 96 },
    { min: 97, max: 98 },
    { min: 99, max: 100 },
  ];
  const highschoolVsUniAverage = {};
  const averageDropoff = {};
  const courses = [
    "SYDE 101",
    "SYDE 101L",
    "SYDE 111",
    "SYDE 113",
    "SYDE 121",
    "SYDE 161",
    "SYDE 181",
  ];
  const favCourse = {};
  const leastFavCourse = {};
  const usefulCourse = {};
  const difficultCourse = {};
  const exerciseVsAverage = {};
  const lecture = {};

  for (var object in data) {
    for (let i = 0; i < uniAverageRanges.length; i++) {
      const range = uniAverageRanges[i];
      if (
        data[object].uniAverage &&
        data[object].uniAverage >= range.min &&
        data[object].uniAverage <= range.max
      ) {
        if (!uniAverage[range.min]) {
          uniAverage[range.min] = 0;
        }
        uniAverage[range.min]++;
        break;
      }
      if (uniAverage[range.min] == null) {
        uniAverage[range.min] = 0;
      }
    }

    for (let i = 0; i < data[object].enrich.split(", ").length; i++) {
      if (data[object].enrich && data[object].uniAverage) {
        if (data[object].enrich.split(", ")[i] in enrichVsAverage) {
          enrichVsAverage[data[object].enrich.split(", ")[i]].push(
            parseInt(data[object].uniAverage)
          );
        } else if (data[object].enrich.split(", ")[i]) {
          enrichVsAverage[data[object].enrich.split(", ")[i]] = [
            parseInt(data[object].uniAverage),
          ];
        }
      }
    }

    if (data[object].enrich && data[object].uniAverage) {
      if (data[object].enrich in enrich) {
        enrich[data[object].enrich].push(parseInt(data[object].uniAverage));
      } else if (data[object].enrich != "") {
        enrich[data[object].enrich] = [parseInt(data[object].uniAverage)];
      }
    }

    // check if high school and 1A average exist in the entry
    if (data[object].highschoolAverage && data[object].uniAverage) {
      // iterate through highschool average ranges to find correct range for the value
      for (let i = 0; i < highschoolAverageRanges.length; i++) {
        const range = highschoolAverageRanges[i];
        if (
          data[object].highschoolAverage >= range.min &&
          data[object].highschoolAverage <= range.max
        ) {
          // if range doesn't exist yet, insert the first value
          if (!highschoolVsUniAverage[range.min]) {
            highschoolVsUniAverage[range.min] = [
              parseInt(data[object].uniAverage),
            ];
          }
          // if range already exists, append the value to the array
          else {
            highschoolVsUniAverage[range.min].push(
              parseInt(data[object].uniAverage)
            );
          }
        }
        if (highschoolVsUniAverage[range.min] == null) {
          highschoolVsUniAverage[range.min] = 0;
        }
      }
    }

    if (data[object].highschoolAverage && data[object].uniAverage) {
      const dropoff =
        parseInt(data[object].uniAverage) -
        parseInt(data[object].highschoolAverage);
      if (dropoff in averageDropoff) {
        averageDropoff[dropoff] += 1;
      } else {
        averageDropoff[dropoff] = 1;
      }
    }

    if (data[object].favCourse in favCourse) {
      favCourse[data[object].favCourse] += 1;
    } else if (data[object].favCourse) {
      favCourse[data[object].favCourse] = 1;
    }

    if (data[object].leastFavCourse in leastFavCourse) {
      leastFavCourse[data[object].leastFavCourse] += 1;
    } else if (data[object].leastFavCourse) {
      leastFavCourse[data[object].leastFavCourse] = 1;
    }

    if (data[object].usefulCourse in usefulCourse) {
      usefulCourse[data[object].usefulCourse] += 1;
    } else if (data[object].usefulCourse) {
      usefulCourse[data[object].usefulCourse] = 1;
    }

    if (data[object].difficultCourse in difficultCourse) {
      difficultCourse[data[object].difficultCourse] += 1;
    } else if (data[object].difficultCourse) {
      difficultCourse[data[object].difficultCourse] = 1;
    }

    if (data[object].exercise && data[object].uniAverage) {
      if (data[object].exercise in exerciseVsAverage) {
        exerciseVsAverage[data[object].exercise].push(
          parseInt(data[object].uniAverage)
        );
      } else {
        exerciseVsAverage[data[object].exercise] = [
          parseInt(data[object].uniAverage),
        ];
      }
    }

    if (data[object].lecture * 100 in lecture) {
      lecture[parseFloat(data[object].lecture) * 100] += 1;
    } else if (data[object].lecture) {
      lecture[parseFloat(data[object].lecture) * 100] = 1;
    }
  }

  const uniAverages = assignKeyRanges(uniAverageRanges);
  const uniAverageValues = Object.values(uniAverage);
  const uniAverageRespondents = uniAverageValues.reduce((a, b) => a + b, 0);

  let enrichVsAverageRespondents = 0;
  for (let key in enrich) {
    enrichVsAverageRespondents += enrich[key].length;
  }

  for (let key in enrichVsAverage) {
    enrichVsAverage[key] = createBoxPlotData(enrichVsAverage[key]);
  }

  let highschoolVsUniAverageRespondents = 0;
  for (let key in highschoolVsUniAverage) {
    highschoolVsUniAverageRespondents += highschoolVsUniAverage[key].length;
    highschoolVsUniAverage[key] = createBoxPlotData(
      highschoolVsUniAverage[key]
    );
  }

  insertMissingIntegerKeys(
    averageDropoff,
    Math.min(...Object.keys(averageDropoff)),
    Math.max(...Object.keys(averageDropoff)),
    1
  );
  const averageDropoffs = Object.keys(sortByAscendingKey(averageDropoff));
  const averageDropoffValues = Object.values(
    sortByAscendingKey(averageDropoff)
  );
  const averageDropoffRespondents = averageDropoffValues.reduce(
    (a, b) => a + b,
    0
  );

  insertMissingStringKeys(favCourse, courses);
  reorderObjectKeys(favCourse, courses);
  const favCourses = Object.keys(favCourse);
  const favCourseValues = Object.values(favCourse, courses);
  const favCourseRespondents = favCourseValues.reduce((a, b) => a + b, 0);

  insertMissingStringKeys(leastFavCourse, courses);
  reorderObjectKeys(leastFavCourse, courses);
  const leastFavCourses = Object.keys(leastFavCourse);
  const leastFavCourseValues = Object.values(leastFavCourse);
  const leastFavCourseRespondents = leastFavCourseValues.reduce(
    (a, b) => a + b,
    0
  );

  const usefulCourses = Object.keys(sortByDescendingValue(usefulCourse));
  const usefulCourseValues = Object.values(sortByDescendingValue(usefulCourse));
  const usefulCourseRespondents = usefulCourseValues.reduce((a, b) => a + b, 0);

  const difficultCourses = Object.keys(sortByDescendingValue(difficultCourse));
  const difficultCourseValues = Object.values(
    sortByDescendingValue(difficultCourse)
  );
  const difficultCourseRespondents = difficultCourseValues.reduce(
    (a, b) => a + b,
    0
  );

  reorderObjectKeys(exerciseVsAverage, [
    "Every day",
    "A few times a week",
    "A few times a month",
    "Once a month",
    "Never",
  ]);
  let exerciseVsAverageRespondents = 0;
  for (let key in exerciseVsAverage) {
    exerciseVsAverageRespondents += exerciseVsAverage[key].length;
    exerciseVsAverage[key] = createBoxPlotData(exerciseVsAverage[key]);
  }
  // console.log(exerciseVsAverageRespondents);

  insertMissingIntegerKeys(
    lecture,
    Math.min(...Object.keys(lecture)),
    Math.max(...Object.keys(lecture)),
    10
  );
  const lectures = Object.keys(concatenateStringToKeys(lecture, "%"));
  const lectureValues = Object.values(lecture);
  const lectureRespondents = lectureValues.reduce((a, b) => a + b, 0);

  return {
    uniAverages,
    uniAverageValues,
    uniAverageRespondents,
    enrichVsAverage,
    enrichVsAverageRespondents,
    highschoolVsUniAverage,
    highschoolVsUniAverageRespondents,
    averageDropoffs,
    averageDropoffValues,
    averageDropoffRespondents,
    favCourses,
    favCourseValues,
    leastFavCourses,
    leastFavCourseValues,
    leastFavCourseRespondents,
    favCourseRespondents,
    usefulCourses,
    usefulCourseValues,
    usefulCourseRespondents,
    difficultCourses,
    difficultCourseValues,
    difficultCourseRespondents,
    exerciseVsAverage,
    exerciseVsAverageRespondents,
    lectures,
    lectureValues,
    lectureRespondents,
  };
}
