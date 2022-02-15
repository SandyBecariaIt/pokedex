const url = process.env.VUE_APP_PRINCIPAL_URL

export function buildRequest(uri, method) {
  return new Request(`${url}${uri}`, {
    method: method
  })
}