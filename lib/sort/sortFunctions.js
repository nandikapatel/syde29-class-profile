export function sortByDescendingValue(obj) {
  const dataArray = Object.entries(obj);
  const sortedArray = dataArray.sort((a, b) => b[1] - a[1]);
  const sortedObj = Object.fromEntries(sortedArray);
  return sortedObj;
}

export function createBoxPlotData(data) {
  const sortedData = data.sort((a, b) => a - b);
  const q1 = calculateQuartile(sortedData, 0.25);
  const q2 = calculateQuartile(sortedData, 0.5);
  const q3 = calculateQuartile(sortedData, 0.75);
  const iqr = q3 - q1;
  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;
  const outliers = sortedData.filter((d) => d < lowerFence || d > upperFence);
  const inliers = sortedData.filter((d) => d >= lowerFence && d <= upperFence);
  const mean = data.reduce((data, val) => data + val, 0) / data.length;
  const median = calculatedMedian(sortedData);
  return [
    Math.min(...inliers),
    q1,
    q2,
    q3,
    Math.max(...inliers),
    outliers,
    mean,
    median,
  ];
}

// helper function to calculate a quartile value for box plot data
function calculateQuartile(sortedData, percentile) {
  const index = percentile * (sortedData.length - 1);
  const floor = Math.floor(index);
  const ceil = Math.ceil(index);
  if (floor === ceil) {
    return sortedData[floor];
  }
  const d0 = sortedData[floor] * (ceil - index);
  const d1 = sortedData[ceil] * (index - floor);
  return d0 + d1;
}

function calculatedMedian(sortedData) {
  const isEven = sortedData.length % 2 === 0;
  if (isEven) {
    const midIndex = sortedData.length / 2;
    const median = (sortedData[midIndex - 1] + sortedData[midIndex]) / 2;
    return median;
  } else {
    const midIndex = Math.floor(sortedData.length / 2);
    const median = sortedData[midIndex];
    return median;
  }
}

export function concatenateStringToKeys(obj, str) {
  const newObj = {};
  for (let key in obj) {
    const newKey = key.toString() + str;
    newObj[newKey] = obj[key];
  }
  return newObj;
}

export function sortByAscendingKey(obj) {
  const sortedKeys = Object.keys(obj).sort((a, b) => a - b);
  const sortedObj = {};
  sortedKeys.forEach((key) => {
    sortedObj[key] = obj[key];
  });
  return sortedObj;
}

export function assignKeyRanges(rangesArray) {
  const ranges = [];
  for (let i = 0; i < rangesArray.length; i++) {
    const { min, max } = rangesArray[i];
    ranges.push(`${min}-${max}`);
  }
  return ranges;
}

export function insertMissingIntegerKeys(obj, minKey, maxKey, stepValue) {
  for (let i = minKey; i <= maxKey; i += stepValue) {
    if (!(i in obj)) {
      obj[i] = 0;
    }
  }
}

export function insertMissingStringKeys(obj, keysArray) {
  keysArray.forEach((key) => {
    if (!obj.hasOwnProperty(key)) {
      obj[key] = 0;
    }
  });
}

// reorders object with custom ordered keys
export function reorderObjectKeys(obj, keyOrder) {
  const newObj = {};
  keyOrder.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  });
  for (const key in obj) {
    if (!newObj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  Object.keys(obj).forEach((key) => {
    delete obj[key];
  });
  Object.assign(obj, newObj);
}
