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

export async function getFruit(fruitName: string) {
  const response = await fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`, {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    throw new Error("Falha ao carregar os dados.");
  }
  const fruit: Fruit = await response.json();

  return {
    fruit
  }
}