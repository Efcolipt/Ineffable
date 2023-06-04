import type { NitroFetchOptions } from 'nitropack'
import { Utils } from '@/core/api/utils'

export type FetchOptions = NitroFetchOptions<any>

export abstract class BaseApi {
  #baseOptions: FetchOptions = {}

  constructor(baseOptions: FetchOptions) {
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
