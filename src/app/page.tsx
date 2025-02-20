import { Search } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex-1 flex justify-center items-center">
      <form>
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="text-gray-300" size={20} />
          </div>
          <input
            type="search"
            id="search"
            name="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-emerald-500 focus:border-emerald-500 w-60 sm:w-100 pl-10 p-2.5"
            placeholder="Pesquise uma fruta"
          />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <Link
            href="/collection/apple"
            className="bg-emerald-200 hover:bg-emerald-300 text-emerald-800 text-sm font-semibold px-2.5 py-0.5 
              rounded-sm border border-emerald-400 inline-flex items-center justify-center"
          >
            Maçã
          </Link>
          <Link
            href="/collection/banana"
            className="bg-emerald-200 hover:bg-emerald-300 text-emerald-800 text-sm font-semibold px-2.5 py-0.5 
              rounded-sm border border-emerald-400 inline-flex items-center justify-center"
          >
            Banana
          </Link>
          <Link
            href="/collection/orange"
            className="bg-emerald-200 hover:bg-emerald-300 text-emerald-800 text-sm font-semibold px-2.5 py-0.5 
              rounded-sm border border-emerald-400 inline-flex items-center justify-center"
          >
            laranja
          </Link>
        </div>
      </form>
    </main>
  );
}
