import Link from "next/link";

interface FruitBadgeInterface {
  fruitId: string | number
  fruit: string
}

export default function FruitBadge({ fruitId, fruit }: FruitBadgeInterface) {
  return (
    <Link
      href={`/collection/${fruitId}`}
      className="bg-emerald-200 hover:bg-emerald-300 text-emerald-800 text-sm font-semibold px-2.5 py-0.5 
      rounded-sm border border-emerald-400 inline-flex items-center justify-center"
    >
      {fruit}
    </Link>
  )
}