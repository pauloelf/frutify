'use client'

import FruitBadge from "./fruit-badge";
import { InputSearch } from "./input-search";
import { useRouter } from "next/navigation";

export default function FormSearch() {
  const router = useRouter()

  const handleAction = (formData: FormData) => {
    const search = formData.get('search')
    router.push(`/collection/${search}`)
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