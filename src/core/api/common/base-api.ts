import type { NitroFetchOptions } from 'nitropack'
import deepmerge from 'deepmerge'

export type FetchOptions = NitroFetchOptions<any>

export abstract class BaseApi {
  #baseOptions: FetchOptions = {}

  constructor(baseOptions: FetchOptions) {
    this.#baseOptions = deepmerge(
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
    const options = deepmerge(this.#baseOptions, passOptions)

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
