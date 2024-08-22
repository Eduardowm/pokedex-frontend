import { NextRequest } from "next/server"

import { POKEMONS_API_BASE_URL } from "./constants"

export async function GET(request: NextRequest) {
    const page = request.nextUrl.searchParams.get('page')

    try {
        const res = await fetch(`${POKEMONS_API_BASE_URL}/pokemons?page=${page}`, {
          headers: { 'Content-Type': 'application/json' },
        })
        const result = await res.json()

        return Response.json({ data: result.data.pokemons })
    } catch(e) {
        console.error(e)
    }
   
    return Response.json({ data: [] })
  }