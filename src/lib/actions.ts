'use server'

import { Fruit } from "./types";

export async function getFruits() {
  const response = await fetch('https://www.fruityvice.com/api/fruit/all', {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    throw new Error("Falha ao carregar os dados.");
  }
  const fruits: Fruit[] = await response.json();

  return {
    fruits
  }
}

export async function getFruit(id: number) {
  const response = await fetch(`https://www.fruityvice.com/api/fruit/${id}`, {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    return {
      error: true,
      message: "Falha ao carregar os dados."
    }
  }
  const fruit: Fruit = await response.json();

  return {
    fruit
  }
}