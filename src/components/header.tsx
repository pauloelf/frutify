import { CherryIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="flex justify-center items-center py-2 px-8">
        <h1 className="flex items-center gap-1 text-3xl text-green-700 font-primary font-bold">
          <CherryIcon size={36} color="oklch(0.505 0.213 27.518)" />
          frutify
        </h1>
      </div>
      <nav className="flex justify-center sm:justify-between items-center px-8 py-4 bg-emerald-900">
        <ul className="flex items-center gap-4 font-secondary text-sm sm:text-md md:text-lg font-bold">
          <li>
            <Link href='/' className="text-emerald-50 hover:text-emerald-200 focus:text-emerald-200">
              Início
            </Link>
          </li>
          <li>
            <Link href='/collection' className="text-emerald-50 hover:text-emerald-200 focus:text-emerald-200">
              Coleção
            </Link>
          </li>
          <li>
            <Link href='/calculator' className="text-emerald-50 hover:text-emerald-200 focus:text-emerald-200">
              Calculadora
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}