import { getFruit, getFruits } from "@/lib/actions"
import { formatNutrientName, getBadgeColor, TranslateToEn, TranslateToPt } from "@/lib/funcs"
import { FruitNamesInEnglish, FruitNamesInPortuguese, FruitNutrientsInEnglish } from "@/lib/types"
import { notFound } from "next/navigation"

const getNutrientUnit = (nutrient: FruitNutrientsInEnglish) => {
  return nutrient === 'calories' ? 'kcal' : 'g';
};

export default async function Fruit({
  params,
}: {
  params: Promise<{ fruit: string }>
}) {
  const fruitName = (await params).fruit.replace("-", " ")
  const { fruits } = await getFruits()
  const fruitPath = TranslateToEn(fruitName?.toLowerCase() as FruitNamesInPortuguese)
  const fruitId = (fruits.find(f => f.name.toLowerCase() === (fruitPath || fruitName))?.id || 0) as number
  const { fruit, error, message } = await getFruit(fruitId)

  if (!fruit) {
    notFound()
  }

  if (error) {
    throw new Error(message)
  }

  return (
    <main className="flex-1 container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8">
        <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 p-4">
          <h1 className="text-3xl font-bold text-white text-center capitalize">{TranslateToPt(fruit.name.toLowerCase() as FruitNamesInEnglish)}</h1>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Classificação Taxonômica</h2>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center">
                <span className="font-medium text-gray-600 w-20">Família:</span>
                <span className="text-gray-800">{fruit.family}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-600 w-20">Gênero:</span>
                <span className="text-gray-800">{fruit.genus}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-600 w-20">Ordem:</span>
                <span className="text-gray-800">{fruit.order}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Valores Nutricionais</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(fruit.nutritions).map(([nutrient, value]) => (
                <div key={nutrient} className={`${getBadgeColor(nutrient as FruitNutrientsInEnglish)} rounded-full px-3 py-1 text-sm text-white font-medium`}>
                  {formatNutrientName(nutrient as FruitNutrientsInEnglish)}: {value}{getNutrientUnit(nutrient as FruitNutrientsInEnglish)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}