'use client'

import { getFruits } from "@/lib/actions";
import { TranslateToPt } from "@/lib/funcs";
import { Fruit, FruitNamesInEnglish, FruitNutrientsInEnglish } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Calculator() {
  const [allFruits, setAllFruits] = useState<Fruit[]>([])
  const [selectedFruit, setSelectedFruit] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [calculatedNutrients, setCalculatedNutrients] = useState<null | Record<string, number>>(null);

  useEffect(() => {
    getFruits().then(data => setAllFruits(data.fruits))
  }, [])

  const dailyRecommended = {
    carbohydrates: 300,
    protein: 50,
    fat: 70,
    sugar: 50,
    calories: 2000
  };

  const quantities = Array.from({ length: 10 }, (_, i) => i + 1);

  const calculateNutrients = () => {
    if (!selectedFruit) return;

    const fruit = allFruits.find(f => f.id === parseInt(selectedFruit));
    if (!fruit) return;

    const result = {} as Record<string, number>;
    Object.entries(fruit.nutritions).forEach(([nutrient, value]) => {
      result[nutrient] = parseFloat((value * quantity).toFixed(1));
    });

    setCalculatedNutrients(result);
  };

  const evaluateNutrition = (nutrient: FruitNutrientsInEnglish, value: number) => {
    const percentage = (value / dailyRecommended[nutrient]) * 100;

    if (percentage < 10) return { message: "Muito pouco", color: "text-blue-500" };
    if (percentage < 30) return { message: "Pouco", color: "text-cyan-500" };
    if (percentage < 70) return { message: "Adequado", color: "text-green-500" };
    if (percentage < 100) return { message: "Bom", color: "text-yellow-500" };
    return { message: "Excesso", color: "text-red-500" };
  };

  return (
    <main className="flex-1 container mx-auto py-8">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4">
          <h1 className="text-2xl font-bold text-white text-center">Calculadora de Nutrientes de Frutas</h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selecione a Fruta
              </label>
              <select
                value={selectedFruit}
                onChange={(e) => setSelectedFruit(e.target.value)}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Selecione uma fruta</option>
                {allFruits.map((fruit) => (
                  <option key={fruit.id} value={fruit.id}>
                    {TranslateToPt(fruit.name.toLowerCase() as FruitNamesInEnglish)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantidade
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              >
                {quantities.map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={calculateNutrients}
              disabled={!selectedFruit}
              className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
            >
              Calcular Nutrientes
            </button>
          </div>

          {calculatedNutrients && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">Nutrientes Calculados</h2>

              <div className="space-y-3">
                {Object.entries(calculatedNutrients).map(([nutrient, value]) => {
                  const evaluation = evaluateNutrition(nutrient as FruitNutrientsInEnglish, value);
                  const nutrientNames: Record<string, string> = {
                    carbohydrates: "Carboidratos",
                    protein: "Proteínas",
                    fat: "Gorduras",
                    sugar: "Açúcar",
                    calories: "Calorias"
                  };
                  const unit = nutrient === 'calories' ? 'kcal' : 'g';

                  return (
                    <div key={nutrient} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{nutrientNames[nutrient]}:</span> {value} {unit}
                      </div>
                      <div className={`${evaluation.color} text-sm font-medium`}>
                        {evaluation.message}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t">
                <h3 className="font-medium mb-2 font-primary">Avaliação Geral:</h3>
                <p className="text-gray-700 font-secondary">
                  {calculatedNutrients.calories < 200 ?
                    "Esta quantidade de fruta oferece poucos nutrientes para um dia inteiro. Considere incluir mais frutas e outros alimentos na sua dieta." :
                    calculatedNutrients.calories > 600 ?
                      "Esta quantidade de fruta fornece muitas calorias de uma vez. Considere distribuir o consumo ao longo do dia." :
                      "Esta quantidade de fruta oferece um bom complemento nutricional para sua dieta diária."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
