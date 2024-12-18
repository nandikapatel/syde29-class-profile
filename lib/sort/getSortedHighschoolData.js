import { getHighschool } from "../../pages/api/highschool";
import {
  sortByDescendingValue,
  insertMissingIntegerKeys,
} from "./sortFunctions";

export async function getSortedHighschoolData() {
  const data = await getHighschool();
  const average = {};
  const extraNum = {};
  const extraType = {};
  const extraTypeNum = {};
  const enrich = {};
  const enrichUnique = {};
  const postChoices = {};
  const postChoicesUnique = {};
  const sydeBool = {};
  const topChoice = {};
  const decision = {};
  const prepare = {};

  for (var object in data) {
    if (parseInt(data[object].average) in average) {
      average[parseInt(data[object].average)] += 1;
    } else if (data[object].average) {
      average[parseInt(data[object].average)] = 1;
    }

    if (data[object].extraNum == "") {
    } else if (data[object].extraNum != "5+") {
      if (parseInt(data[object].extraNum) in extraNum) {
        extraNum[parseInt(data[object].extraNum)] += 1;
      } else if (parseInt(data[object].extraNum)) {
        extraNum[parseInt(data[object].extraNum)] = 1;
      }
    } else if (data[object].extraNum == "5+") {
      if (data[object].extraNum in extraNum) {
        extraNum[data[object].extraNum] += 1;
      } else if (data[object].extraNum) {
        extraNum[data[object].extraNum] = 1;
      }
    }

    for (let i = 0; i < data[object].extraType.split(", ").length; i++) {
      if (data[object].extraType.split(", ")[i] in extraType) {
        extraType[data[object].extraType.split(", ")[i]] += 1;
      } else if (data[object].extraType.split(", ")[i]) {
        extraType[data[object].extraType.split(", ")[i]] = 1;
      }
    }

    if (data[object].extraType in extraTypeNum) {
      extraTypeNum[data[object].extraType] += 1;
    } else if (data[object].extraType) {
      extraTypeNum[data[object].extraType] = 1;
    }

    for (let i = 0; i < data[object].enrich.split(", ").length; i++) {
      if (data[object].enrich.split(", ")[i] in enrichUnique) {
        enrichUnique[data[object].enrich.split(", ")[i]] += 1;
      } else if (data[object].enrich.split(", ")[i]) {
        enrichUnique[data[object].enrich.split(", ")[i]] = 1;
      }
    }

    if (data[object].enrich in enrich) {
      enrich[data[object].enrich] += 1;
    } else if (data[object].enrich) {
      enrich[data[object].enrich] = 1;
    }

    for (let i = 0; i < data[object].postChoices.split(", ").length; i++) {
      if (data[object].postChoices.split(", ")[i] in postChoicesUnique) {
        postChoicesUnique[data[object].postChoices.split(", ")[i]] += 1;
      } else if (data[object].postChoices.split(", ")[i]) {
        postChoicesUnique[data[object].postChoices.split(", ")[i]] = 1;
      }
    }

    if (data[object].postChoices in postChoices) {
      postChoices[data[object].postChoices] += 1;
    } else if (data[object].postChoices) {
      postChoices[data[object].postChoices] = 1;
    }

    if (data[object].sydeBool in sydeBool) {
      sydeBool[data[object].sydeBool] += 1;
    } else if (data[object].sydeBool) {
      sydeBool[data[object].sydeBool] = 1;
    }

    if (data[object].topChoice in topChoice) {
      topChoice[data[object].topChoice] += 1;
    } else if (data[object].topChoice) {
      topChoice[data[object].topChoice] = 1;
    }

    if (data[object].decision in decision) {
      decision[data[object].decision] += 1;
    } else if (data[object].decision) {
      decision[data[object].decision] = 1;
    }

    if (parseInt(data[object].prepare) in prepare) {
      prepare[parseInt(data[object].prepare)] += 1;
    } else if (data[object].prepare) {
      prepare[parseInt(data[object].prepare)] = 1;
    }
  }

  insertMissingIntegerKeys(
    average,
    Math.min(...Object.keys(average)),
    Math.max(...Object.keys(average)),
    1
  );
  const averages = Object.keys(average);
  const averageValues = Object.values(average);
  const averageRespondents = averageValues.reduce((a, b) => a + b, 0);

  const extracurricularNum = Object.keys(extraNum);
  const extraNumValues = Object.values(extraNum);
  const extraNumRespondents = extraNumValues.reduce((a, b) => a + b, 0);

  const extracurricularType = Object.keys(sortByDescendingValue(extraType));
  const extraTypeValues = Object.values(sortByDescendingValue(extraType));

  const extraTypeValueNum = Object.values(extraTypeNum);
  const extraTypeRespondents = extraTypeValueNum.reduce((a, b) => a + b, 0);

  const enrichUniques = Object.keys(sortByDescendingValue(enrichUnique));
  const enrichValues = Object.values(sortByDescendingValue(enrich));
  const enrichRespondents = enrichValues.reduce((a, b) => a + b, 0);

  const postChoice = Object.keys(sortByDescendingValue(postChoicesUnique));
  const postChoicesValues = Object.values(sortByDescendingValue(postChoices));
  const postChoicesRespondents = postChoicesValues.reduce((a, b) => a + b, 0);

  const sydeBools = Object.keys(sortByDescendingValue(sydeBool));
  const sydeBoolValues = Object.values(sortByDescendingValue(sydeBool));
  const sydeBoolRespondents = sydeBoolValues.reduce((a, b) => a + b, 0);

  const topChoices = Object.keys(topChoice);
  const topChoiceValues = Object.values(topChoice);
  const topChoiceRespondents = topChoiceValues.reduce((a, b) => a + b, 0);

  const decisions = Object.keys(sortByDescendingValue(decision));
  const decisionValues = Object.values(sortByDescendingValue(decision));
  const decisionRespondents = decisionValues.reduce((a, b) => a + b, 0);

  const preparation = Object.keys(prepare);
  const prepareValues = Object.values(prepare);
  const prepareRespondents = prepareValues.reduce((a, b) => a + b, 0);

  return {
    averages,
    averageValues,
    averageRespondents,
    extracurricularNum,
    extraNumValues,
    extraNumRespondents,
    extracurricularType,
    extraTypeValues,
    extraTypeRespondents,
    enrichUniques,
    enrichValues,
    enrichRespondents,
    postChoice,
    postChoicesValues,
    postChoicesRespondents,
    sydeBools,
    sydeBoolValues,
    sydeBoolRespondents,
    topChoices,
    topChoiceValues,
    topChoiceRespondents,
    decisions,
    decisionValues,
    decisionRespondents,
    preparation,
    prepareValues,
    prepareRespondents,
  };
}
