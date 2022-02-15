import { buildRequest } from './network'

export async function getPokemons () {
  const request = buildRequest('/pokemon', 'GET')
  const response = await fetch(request)
  const data = response.ok ? await response.json() : undefined
  return data
}

export async function getPokemonByName (name) {
  const request = buildRequest(`/pokemon-form/${name}`, 'GET')
  const response = await fetch(request)
  const data = response.ok ? await response.json() : undefined
  return data
}

// https://pokeapi.co/api/v2//7/
export async function getPokemonType (idType) {
  const request = buildRequest(`/type/${idType}`, 'GET')
  const response = await fetch(request)
  const data = response.ok ? await response.json() : undefined
  return data
}

// 

export async function getPokemonAbility (idType) {
  const request = buildRequest(`/ability/${idType}`, 'GET')
  const response = await fetch(request)
  const data = response.ok ? await response.json() : undefined
  return data
}
