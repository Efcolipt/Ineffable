import { ApiCollectionVideo } from '@/core/api/services/collection-video.service'
import { ApiCollectionInfo } from '@/core/api/services/collection-info.service'

export default () => {
  const config = useRuntimeConfig()
  const configInfo = config.INFO_BD
  const configVideo = config.VIDEO_BD

  const apiCollectionInfo = new ApiCollectionInfo({
    query: {
      [configInfo.API_PROP]: configInfo.API_KEY,
    },
    baseURL: configInfo.API_BASE_URL,
  })

  const apiCollectionVideo = new ApiCollectionVideo({
    query: {
      [configVideo.API_PROP]: configVideo.API_KEY,
    },
    baseURL: configVideo.API_BASE_URL,
  })

  return {
    apiCollectionInfo,
    apiCollectionVideo,
  }
}
