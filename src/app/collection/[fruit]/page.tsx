import { getFruit, getFruits } from "@/lib/actions"
import { TranslateToEn, TranslateToPt } from "@/lib/funcs"
import { FruitNamesInEnglish, FruitNamesInPortuguese } from "@/lib/types"
import { notFound } from "next/navigation"

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
      <p>{TranslateToPt(fruit.name.toLowerCase() as FruitNamesInEnglish)}</p>
    </main>
  )
}