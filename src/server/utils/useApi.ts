type FetchPath = string
type FetchOptions = any

export const useApi = () => {
  const config = useRuntimeConfig()
  const configInfo = config.INFO_BD
  const configVideo = config.VIDEO_BD

  const fetchInfoCollectionApi = async <T = unknown>(
    path: FetchPath,
    options: FetchOptions = {},
    verison: string = configInfo.API_VERSIONS.v2
  ): Promise<T> => {
    return await $fetch<T>(path, {
      ...options,
      method: 'GET',
      baseURL: configInfo.API_BASE_URL + verison,
      headers: {
        [configInfo.API_PROP]: configInfo.API_KEY,
        'Content-Type': 'application/json',
      },
    })
  }

  const fetchVideoCollectionApi = async <T = unknown>(
    path: FetchPath,
    options: FetchOptions = {}
  ): Promise<T> => {
    options.query = {
      ...options.query,
      [configVideo.API_PROP]: configVideo.API_KEY,
    }

    return await $fetch<T>(path, {
      ...options,
      method: 'GET',
      baseURL: configVideo.API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return {
    fetchInfoCollectionApi,
    fetchVideoCollectionApi,
  }
}
