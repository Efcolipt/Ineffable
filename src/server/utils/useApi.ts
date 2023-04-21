import type { NitroFetchOptions } from 'nitropack'

type FetchPath = string
type FetchOptions = NitroFetchOptions<any>

export const useApi = () => {
  const config = useRuntimeConfig()
  const configInfo = config.INFO_BD
  const configVideo = config.VIDEO_BD

  const fetchInfoCollectionApi = async <T = unknown>(
    path: FetchPath,
    options: FetchOptions = {},
    verison: 'v1' | 'v2' = <'v1' | 'v2'>configInfo.API_VERSIONS.default
  ): Promise<T> => {
    return await $fetch<T>(path, {
      ...options,
      method: 'GET',
      baseURL: configInfo.API_BASE_URL + configInfo.API_VERSIONS.list[verison],
      headers: {
        [configInfo.API_PROP]: configInfo.API_KEY,
        'Content-Type': 'application/json',
      },
    })
  }

  const fetchVideoCollectionApi = async <T = unknown>(
    path: FetchPath,
    options: FetchOptions = {},
    verison: 'v1' = <'v1'>configInfo.API_VERSIONS.default
  ): Promise<T> => {
    options.query = {
      ...options.query,
      [configVideo.API_PROP]: configVideo.API_KEY,
    }

    return await $fetch<T>(path, {
      ...options,
      method: 'GET',
      baseURL: configVideo.API_BASE_URL + configInfo.API_VERSIONS.list[verison],
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
