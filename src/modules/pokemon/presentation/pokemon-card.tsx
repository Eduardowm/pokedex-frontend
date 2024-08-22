import Image from "next/image"

import Pokemon from "../domain/pokemon.entity"

interface PokemonCardProps {
  pokemon: Pokemon
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="w-full flex gap-4 items-center rounded border border-red-400 bg-red-500 text-white p-4">
      <div className="bg-white rounded">
        {pokemon.image ? (
          <Image src={pokemon.image} alt={pokemon.name} width={64} height={64} />
        ) : (
          <Image src='/no-image-pokemon.png' alt={pokemon.name} className="p-3" width={64} height={64} />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="flex gap-2 text-lg font-semibold">
          {pokemon.getFormattedName()}
          <span className="text-red-300">{pokemon.getFormattedId()}</span>
        </h2>
        {pokemon.weight && <p><b>Weight:</b> {pokemon.getFormattedWeight()}</p>}
      </div>
    </div>
  )
}
export default PokemonCard
