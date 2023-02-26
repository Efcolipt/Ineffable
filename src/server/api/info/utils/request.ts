export const request = async (path: string, opt = {}) => {
  const config = useRuntimeConfig().INFO_BD

  return await $fetch(path, {
    ...opt,
    baseURL: config.API_BASE_URL,
    method: 'GET',
    headers: {
      [config.API_PROP]: config.API_KEY,
      'Content-Type': 'application/json',
    },
  })
}
