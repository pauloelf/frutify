'use client'

import { FilterPerFamilyContextType, FruitFamiliesInEnglish } from "@/lib/types";
import { createContext, useState } from "react";

const defaultValues: FilterPerFamilyContextType = {
  filterFamily: 'all',
  setFilterFamily: () => ''
}

export const FilterContext = createContext<FilterPerFamilyContextType>(defaultValues)

export default function FilterContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [filterFamily, setFilterFamily] = useState<FruitFamiliesInEnglish | 'all'>('all')

  return (
    <FilterContext.Provider value={{ filterFamily, setFilterFamily }}>
      {children}
    </FilterContext.Provider>
  )
}