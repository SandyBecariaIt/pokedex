const url = process.env.VUE_APP_PRINCIPAL_URL
const token = process.env.VUE_APP_ACCESS_TOKEN

export function buildRequest(uri) {
  return new Request(`${url}${uri}`, {
    method: 'GET'
  })
}