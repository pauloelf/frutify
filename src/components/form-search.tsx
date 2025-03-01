'use client'

import { TranslateToEn } from "@/lib/funcs";
import FruitBadge from "./fruit-badge";
import { InputSearch } from "./input-search";
import { useRouter } from "next/navigation";
import { FruitNamesInPortuguese } from "@/lib/types";

export default function FormSearch() {
  const router = useRouter()

  const handleAction = (formData: FormData) => {
    const search = formData.get('search')?.toString()
    const searchPath = TranslateToEn(search?.toLowerCase() as FruitNamesInPortuguese)
    router.push(`/collection/${(searchPath || search?.toLowerCase())?.replace(" ", "-")}`)
  }

  return (
    <form action={handleAction}>
      <label htmlFor="search" className="sr-only">Busca</label>
      <InputSearch />
      <div className="flex justify-center gap-2 mt-4">
        <FruitBadge fruit="Maçã" fruitId="apple" />
        <FruitBadge fruit="Banana" fruitId="banana" />
        <FruitBadge fruit="Laranja" fruitId="orange" />
      </div>
    </form>
  )
}