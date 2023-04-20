type FetchPath =
  | string
  | Request
  | Ref<string | Request>
  | (() => string)
  | Request
type FetchOptions = any

export const useApi = () => {
  const config = useRuntimeConfig()
  const configInfo = config.INFO_BD
  const configVideo = config.VIDEO_BD

  const fetchInfoCollectionApi = async <T = unknown>(
    path: FetchPath,
    options: FetchOptions = {}
  ) => {
    return await useFetch<T>(path, {
      ...options,
      method: 'GET',
      baseURL: configInfo.API_BASE_URL,
      headers: {
        [configInfo.API_PROP]: configInfo.API_KEY,
        'Content-Type': 'application/json',
      },
    })
  }

  const fetchVideoCollectionApi = async <T = unknown>(
    path: FetchPath,
    options: FetchOptions = {}
  ) => {
    return await useFetch<T>(path, {
      ...options,
      method: 'GET',
      baseURL: configVideo.API_BASE_URL,
      headers: {
        [configVideo.API_PROP]: configVideo.API_KEY,
        'Content-Type': 'application/json',
      },
    })
  }

  return {
    fetchInfoCollectionApi,
    fetchVideoCollectionApi,
  }
}
