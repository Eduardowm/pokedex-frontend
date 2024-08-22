'use client';
import { useCallback, useEffect, useState } from "react";
import groupBy from 'lodash/groupBy'

import type Pokemon from "@/modules/pokemon/domain/pokemon.entity";

import { getPokemonsFromPage } from "@/modules/pokemon/infrastructure/pokemon.api";

import Button from "@/shared/presentation/ui/button/button";
import PokemonCard from "./pokemon-card";

import { ITEMS_BY_PAGE } from "../contants";
import Loading from "@/shared/presentation/ui/loading/loading";

function PokemonList() {
  const [loading, setLoading] = useState<boolean>(false)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [allPokemonsLoaded, setAllPokemonsLoaded] = useState<boolean>(false)

  const fetchPokemons = useCallback(async () => {
    try {
      setLoading(true)
      const nextPage = pokemons.length ? (pokemons.length / ITEMS_BY_PAGE + 1) : 1

      const newPokemons = await getPokemonsFromPage(nextPage)
      setPokemons((prev) => Object.values(groupBy([...prev, ...newPokemons], 'id')).map(group => group[0]))

      setLoading(false)

      if (newPokemons.length < ITEMS_BY_PAGE) {
        setAllPokemonsLoaded(true)
      }
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }, [pokemons])

  useEffect(() => {
    fetchPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-[1000px] max-w-full px-2 my-4">
      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {!allPokemonsLoaded && (
        <div className="w-full flex justify-center my-4">
          <Button onClick={fetchPokemons} disabled={loading}>
            {loading ? <Loading /> : 'Load more'}
          </Button>
        </div>
      )}
    </div>
  );
}
export default PokemonList
