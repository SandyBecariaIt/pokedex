import { buildRequest } from './network'

async function getPokemons () {
  const request = buildRequest('/pokemon', 'GET')
  const response = await fetch(request);
  const data = await response.json()
  return data
}
