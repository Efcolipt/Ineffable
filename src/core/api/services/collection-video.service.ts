import { BaseApi } from '@/core/api/common/base-api'
import {
  ICollectionVideoPlayer,
  IResponseWrapperCollectionVideo,
} from '@/core/api/types/collection-video'

export class ApiCollectionVideo extends BaseApi {
  async findPlayerByKinopoiskId(id: number) {
    return await this.get<
      IResponseWrapperCollectionVideo<ICollectionVideoPlayer[]>
    >('/search', {
      query: {
        kp: id,
      },
    })
  }
}
