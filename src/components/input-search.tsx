'use client'

import { Search } from "lucide-react";
import { useState } from "react";

export function InputSearch() {
  const [search, setSearch] = useState('')

  return (
    <div className="relative mt-1">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="text-gray-300" size={20} />
      </div>
      <input
        type="search"
        id="search"
        name="search"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-emerald-500 focus:border-emerald-500 w-60 sm:w-100 pl-10 p-2.5"
        placeholder="Pesquise uma fruta"
      />
    </div>
  )
}