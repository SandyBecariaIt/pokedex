const url = 'https://pokeapi.co/api/v2'

export function buildRequest(uri, method) {
  return new Request(`${url}${uri}`, {
    method: method,
    redirect: 'follow'
  })
}