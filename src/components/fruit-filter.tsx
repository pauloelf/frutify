'use client'

import { FilterContext } from "@/contexts/filter-context"
import { Fruit, FruitFamiliesInEnglish } from "@/lib/types"
import { useContext, useEffect, useState } from "react"

export default function FruitFilter({ fruits }: { fruits: Fruit[] }) {
  const [filter, setFilter] = useState<FruitFamiliesInEnglish | 'all'>('all')
  const [filterOptions, setFilterOptions] = useState<FruitFamiliesInEnglish[]>([])
  const { setFilterFamily } = useContext(FilterContext)

  useEffect(() => {
    const uniqueFilterOptions = [...new Set(fruits.map(fruit => fruit.family))]
    setFilterOptions(uniqueFilterOptions)
  }, [])

  useEffect(() => {
    setFilterFamily(filter)
  }, [filter])

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value as FruitFamiliesInEnglish)}
      className="block max-w-auto px-2 py-2 bg-emerald-50 border border-emerald-200 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
    >
      <option value='all'>Todas</option>
      {filterOptions.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}