export const request = async <T>(path: string, opt = {}): Promise<T> => {
  const config = useRuntimeConfig().INFO_BD

  return await $fetch<T>(path, {
    ...opt,
    baseURL: config.API_BASE_URL,
    method: 'GET',
    headers: {
      [config.API_PROP]: config.API_KEY,
      'Content-Type': 'application/json',
    },
  })
}
