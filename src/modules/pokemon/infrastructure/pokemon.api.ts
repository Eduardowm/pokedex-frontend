import Pokemon, { type PokemonJSONPayload } from "../domain/pokemon.entity"

interface ApiGetPokemonsResult {
  data: PokemonJSONPayload[]
}

async function getPokemonsFromPage(page: number) {
  const response = await fetch(`/api/pokemons?page=${page}`)
  const result: ApiGetPokemonsResult = await response.json()

  return result.data.map((p) => Pokemon.fromJSON(p))
}

export {
  getPokemonsFromPage,
}
