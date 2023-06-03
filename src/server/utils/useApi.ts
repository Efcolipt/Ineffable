import type { NitroFetchOptions } from 'nitropack'
import {
  IResponseWrapperCollectionVideo,
  ICollectionPlayer,
  IGenre,
  ICountry,
  ListTopType,
  ICollectionByTop,
  IResponseWrapperCollection,
  ICollectionByID,
  ICollectionSimilarByID,
  ICollectionBySearch,
} from '@/server/types/index'

type FetchOptions = NitroFetchOptions<any>

const config = useRuntimeConfig()
const configInfo = config.INFO_BD
const configVideo = config.VIDEO_BD

class Utils {
  static isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item)
  }

  static mergeDeep<T = object>(target: any, ...sources: any[]): T {
    if (!sources.length) return target
    const source = sources.shift()

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} })
          this.mergeDeep(target[key], source[key])
        } else {
          Object.assign(target, { [key]: source[key] })
        }
      }
    }

    return this.mergeDeep(target, ...sources)
  }
}

class BaseApi {
  #baseOptions: FetchOptions = {}

  constructor(baseOptions: FetchOptions = {}) {
    this.#baseOptions = Utils.mergeDeep(
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      baseOptions
    )
  }

  private async instance<T>(
    path: string,
    passOptions: FetchOptions = {}
  ): Promise<T> {
    const options = Utils.mergeDeep<FetchOptions>(
      this.#baseOptions,
      passOptions
    )

    return await $fetch<T>(path, options)
  }

  protected async get<T>(
    path: string,
    passOptions: FetchOptions = {}
  ): Promise<T> {
    return await this.instance<T>(path, {
      ...passOptions,
      method: 'GET',
    })
  }
}

class ApiCollection extends BaseApi {
  constructor() {
    super({
      baseURL: configInfo.API_BASE_URL,
      headers: {
        [configInfo.API_PROP]: configInfo.API_KEY,
      },
    })
  }

  async getTop({ page, type }: { page: number; type: ListTopType }) {
    return await this.get<IResponseWrapperCollection<ICollectionByTop[]>>(
      'top',
      {
        query: {
          type,
          page,
        },
      }
    )
  }

  async getFilters() {
    return await this.get<{
      genres: IGenre[]
      countries: ICountry[]
    }>('/filters')
  }

  async findOneById(id: number) {
    return await this.get<IResponseWrapperCollection<ICollectionByID>>(`/${id}`)
  }

  async findSimilarsById(id: number) {
    return await this.get<IResponseWrapperCollection<ICollectionSimilarByID>>(
      `/${id}/similars`
    )
  }

  async findByKeyboard({ keyword, page }: { keyword: string; page: number }) {
    return await this.get<
      IResponseWrapperCollection<ICollectionBySearch[]> & {
        keyword: string
        searchFilmsCountResult: number
      }
    >('/search-by-keyword', {
      query: {
        keyword,
        page,
      },
    })
  }
}

class ApiVideo extends BaseApi {
  constructor() {
    super({
      query: {
        [configVideo.API_PROP]: configVideo.API_KEY,
      },
      baseURL: configVideo.API_BASE_URL,
      headers: {
        [configInfo.API_PROP]: configInfo.API_KEY,
      },
    })
  }

  async findPlayerByKinopoiskId(id: number) {
    return await this.get<IResponseWrapperCollectionVideo<ICollectionPlayer[]>>(
      '/search',
      {
        query: {
          kp: id,
        },
      }
    )
  }
}

export const useApi = () => {
  const ApiCollectionService = new ApiCollection()
  const ApiVideoService = new ApiVideo()

  return {
    ApiCollectionService,
    ApiVideoService,
  }
}
