import Image from 'next/image'

export default async function Home() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const { results: pokemons } = await response.json();
  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Pokemons</h2>
      <div className="flex flex-wrap gap-3">
        Pokemon Name
      </div>
    </div>
  )
}
