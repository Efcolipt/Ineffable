export const fetchCollection = async <T>(
  path: string | Request | Ref<string | Request> | (() => string) | Request,
  opt = {}
) => {
  const config = useRuntimeConfig().INFO_BD

  return await useFetch<T>(path, {
    ...opt,
    baseURL: config.API_BASE_URL,
    method: 'GET',
    headers: {
      [config.API_PROP]: config.API_KEY,
      'Content-Type': 'application/json',
    },
  })
}
