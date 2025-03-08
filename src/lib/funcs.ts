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
  FruitNamesInPortuguese,
  FruitNutrientsInEnglish
}
  from "./types";

export const TranslateToPt = (text: FruitNamesInEnglish) => FruitNamesInEn[text]
export const TranslateToEn = (text: FruitNamesInPortuguese) => FruitNamesInPt[text]
export const TranslateFamily = (text: FruitFamiliesInEnglish) => fruitFamiliesTranslations[text]
export const TranslateGenus = (text: FruitGenusInEnglish) => fruitGenusTranslations[text]
export const TranslateOrder = (text: FruitOrdersInEnglish) => fruitOrdersTranslations[text]
export const formatNutrientName = (nutrient: FruitNutrientsInEnglish) => {
  const names = {
    carbohydrates: 'Carboidratos',
    protein: 'Proteínas',
    fat: 'Gorduras',
    sugar: 'Açúcar',
    calories: 'Calorias'
  };
  return names[nutrient] || nutrient;
};
export const getBadgeColor = (nutrient: FruitNutrientsInEnglish) => {
  switch (nutrient) {
    case 'carbohydrates':
      return 'bg-blue-500';
    case 'protein':
      return 'bg-green-500';
    case 'fat':
      return 'bg-yellow-500';
    case 'sugar':
      return 'bg-purple-500';
    case 'calories':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};