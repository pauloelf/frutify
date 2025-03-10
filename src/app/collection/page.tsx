import FruitFilter from "@/components/fruit-filter";
import FruitList from "@/components/fruit-list";
import { getFruits } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coleção | Frutify",
  description: "Explore nossa coleção de frutas, filtre por características e descubra seus valores nutricionais.",
};

export default async function Collection() {
  const { fruits } = await getFruits()

  return (
    <main className="flex-1 container mx-auto p-4">
      <h1 className="text-2xl font-primary font-bold mb-4 text-center">Lista de Frutas</h1>
      <div className="flex justify-end items-center gap-2 pb-4">
        <span className="self-center">Filtrar Família</span>
        <FruitFilter fruits={fruits} />
      </div>
      <FruitList initialFruits={fruits} />
    </main>
  )
}