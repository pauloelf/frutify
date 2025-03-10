'use client'

import { useContext, useEffect, useState } from 'react';
import Pagination from './pagination';
import Link from 'next/link';
import { Fruit, FruitFamiliesInEnglish, FruitGenusInEnglish, FruitNamesInEnglish, FruitOrdersInEnglish } from '@/lib/types';
import { TranslateFamily, TranslateGenus, TranslateToPt, TranslateOrder } from '@/lib/funcs';
import { FilterContext } from '@/contexts/filter-context';
import { getFruitsPerFamily } from '@/lib/actions';

interface FruitListProps {
  initialFruits: Fruit[];
}

export default function FruitList({ initialFruits }: FruitListProps) {
  const [fruitsFiltered, setFruitsFiltered] = useState<Fruit[]>([])
  const [currentFruits, setCurrentFruits] = useState<Fruit[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const fruitsPerPage = 10;
  const { filterFamily } = useContext(FilterContext)

  const indexOfLastFruit = currentPage * fruitsPerPage;
  const indexOfFirstFruit = indexOfLastFruit - fruitsPerPage;

  const handleFilter = async (family: FruitFamiliesInEnglish) => {
    const { fruitsPerFamily } = await getFruitsPerFamily(family)
    setFruitsFiltered(fruitsPerFamily)
  }

  useEffect(() => {
    if (filterFamily !== 'all') {
      handleFilter(filterFamily)
    } else {
      setFruitsFiltered([])
    }
    setCurrentPage(1)
  }, [filterFamily])

  useEffect(() => {
    const sourceFruits = filterFamily !== 'all' ? fruitsFiltered : initialFruits
    setCurrentFruits(sourceFruits.slice(indexOfFirstFruit, indexOfLastFruit))
  }, [fruitsFiltered, initialFruits, indexOfFirstFruit, indexOfLastFruit])


  const getFruitPath = (name: string) => name.replace(" ", "-").toLowerCase()

  return (
    <div>
      <div className='w-full overflow-x-auto'>
        <table className="min-w-full bg-emerald-100">
          <thead>
            <tr className="bg-emerald-200">
              <th className="px-4 py-2 text-left border"></th>
              <th className="px-4 py-2 text-left border">Fruta</th>
              <th className="px-4 py-2 text-left border">Família</th>
              <th className="px-4 py-2 text-left border">Ordem</th>
              <th className="px-4 py-2 text-left border">Gênero</th>
              <th className="px-4 py-2 text-left border">Carboidratos</th>
              <th className="px-4 py-2 text-left border">Gordura</th>
              <th className="px-4 py-2 text-left border">Proteínas</th>
              <th className="px-4 py-2 text-left border">Açúcar</th>
              <th className="px-4 py-2 text-left border">Calorias</th>
            </tr>
          </thead>
          <tbody>
            {currentFruits.map((fruit, index) => (
              <tr key={fruit.id} className={index % 2 === 0 ? 'bg-emerald-50' : 'bg-emerald-100'}>
                <td className="px-4 py-2 border text-emerald-900 font-secondary font-semibold hover:underline bg-emerald-100 text-center">
                  <Link className='text-red-700' href={`/collection/${getFruitPath(fruit.name)}`}>Visualizar</Link>
                </td>
                <td className="px-4 py-2 border text-emerald-800 capitalize">
                  {TranslateToPt(fruit.name.toLowerCase().trim() as FruitNamesInEnglish)}
                </td>
                <td className="px-4 py-2 border text-emerald-800 capitalize">
                  {TranslateFamily(fruit.family.toLowerCase().trim() as FruitFamiliesInEnglish)}
                </td>
                <td className="px-4 py-2 border text-emerald-800 capitalize">
                  {TranslateOrder(fruit.order.toLowerCase().trim() as FruitOrdersInEnglish)}
                </td>
                <td className="px-4 py-2 border text-emerald-800 capitalize">
                  {TranslateGenus(fruit.genus.toLowerCase().trim() as FruitGenusInEnglish)}
                </td>
                <td className="px-4 py-2 border text-emerald-800">{fruit.nutritions.carbohydrates}g</td>
                <td className="px-4 py-2 border text-emerald-800">{fruit.nutritions.fat}g</td>
                <td className="px-4 py-2 border text-emerald-800">{fruit.nutritions.protein}g</td>
                <td className="px-4 py-2 border text-emerald-800">{fruit.nutritions.sugar}g</td>
                <td className="px-4 py-2 border text-emerald-800">{fruit.nutritions.calories}kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        fruitsPerPage={fruitsPerPage}
        totalFruits={filterFamily !== 'all' ? fruitsFiltered.length : initialFruits.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}