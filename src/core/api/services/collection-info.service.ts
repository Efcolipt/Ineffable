import type {
  ListCollectionInfoTopType,
  ICollectionInfoGenre,
  ICollectionInfoCountry,
  ICollectionInfoByID,
  ICollectionInfoByTop,
  ICollectionInfoSimilarByID,
  ICollectionInfoBySearch,
  IResponseWrapperCollectionInfo,
} from '@/core/api/types/collection-info'

import { BaseApi } from '@/core/api/base/base-api'

export class ApiCollectionInfo extends BaseApi {
  async getTop(dto: { page: number; type: ListCollectionInfoTopType }) {
    return await this.get<
      IResponseWrapperCollectionInfo<ICollectionInfoByTop[]>
    >('top', {
      query: dto,
    })
  }

  async getFilters() {
    return await this.get<{
      genres: ICollectionInfoGenre[]
      countries: ICollectionInfoCountry[]
    }>('/filters')
  }

  async findOneById(id: number) {
    return await this.get<IResponseWrapperCollectionInfo<ICollectionInfoByID>>(
      `/${id}`
    )
  }

  async findSimilarsById(id: number) {
    return await this.get<
      IResponseWrapperCollectionInfo<ICollectionInfoSimilarByID>
    >(`/${id}/similars`)
  }

  async findByKeyboard(dto: { keyword: string; page: number }) {
    return await this.get<
      IResponseWrapperCollectionInfo<ICollectionInfoBySearch[]> & {
        keyword: string
        searchFilmsCountResult: number
      }
    >('/search-by-keyword', {
      query: dto,
    })
  }
}
