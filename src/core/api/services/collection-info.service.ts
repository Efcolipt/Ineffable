import deepmerge from 'deepmerge'
import type {
  ICollectionInfoGenre,
  ICollectionInfoCountry,
  ICollectionInfoByID,
  ICollectionInfoByTop,
  ICollectionInfoSimilar,
  ICollectionInfoBySearch,
  IResponseWrapperCollectionInfo,
  ICollectionInfoBase,
  ICollectionInfoHealthy,
} from '@/core/api/types/collection-info'
import { FetchOptions, BaseApi } from '@/core/api/common/base-api'

export class ApiCollectionInfo extends BaseApi {
  async overGet<T>(path: string, passOptions: FetchOptions) {
    const baseOptions: FetchOptions = {
      query: {
        selectFields: [
          'externalId',
          'slogan',
          'name',
          'shortDescription',
          'movieLength',
          'rating.kp',
          'rating.imdb',
          'rating.await',
          'year',
          'type',
          'genres',
          'countries',
          'ageRating',
        ],
      },
    }

    const options = deepmerge(baseOptions, passOptions)

    return await this.get<
      IResponseWrapperCollectionInfo<ICollectionInfoBase<T>>[]
    >(path, options)
  }

  async getHealthy() {
    return await this.get<ICollectionInfoHealthy>('/v1/health')
  }

  async getAwaitable() {
    return await this.overGet<ICollectionInfoByTop>('/v1.3/movie', {
      query: {
        selectFields: ['backdrop'],
        sortField: ['year', 'votes.await'],
        year: new Date().getFullYear(),
        limit: 12,
        page: 1,
      },
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
      IResponseWrapperCollectionInfo<ICollectionInfoSimilar>
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
