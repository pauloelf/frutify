import {
  FruitNamesInEn,
  FruitNamesInPt,
  fruitFamiliesTranslations,
  fruitGenusTranslations,
  fruitOrdersTranslations
}
  from "./data";
import {
  FruitFamiliesInEnglish,
  FruitNamesInEnglish,
  FruitGenusInEnglish,
  FruitOrdersInEnglish,
  FruitNamesInPortuguese
}
  from "./types";

export const TranslateToPt = (text: FruitNamesInEnglish) => FruitNamesInEn[text]
export const TranslateToEn = (text: FruitNamesInPortuguese) => FruitNamesInPt[text]
export const TranslateFamily = (text: FruitFamiliesInEnglish) => fruitFamiliesTranslations[text]
export const TranslateGenus = (text: FruitGenusInEnglish) => fruitGenusTranslations[text]
export const TranslateOrder = (text: FruitOrdersInEnglish) => fruitOrdersTranslations[text]