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
      <h1 className="text-2xl font-primary font-bold mb-4">Lista de Frutas</h1>
      <FruitList initialFruits={fruits} />
    </main>
  )
}