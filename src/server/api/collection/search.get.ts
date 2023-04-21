import { ICollectionBySearch, IResponseWrapperCollection } from '@/server/types'

export default defineEventHandler(async (event) => {
  const { fetchInfoCollectionApi } = useApi()
  const query = getQuery(event)
  const config = useRuntimeConfig().INFO_BD

  return await fetchInfoCollectionApi<
    IResponseWrapperCollection<ICollectionBySearch[]> & {
      keyword: string
      searchFilmsCountResult: number
    }
  >(
    '/search-by-keyword',
    {
      query: {
        keyword: query.keywords,
        page: query.page ?? 1,
      },
    },
    config.API_VERSIONS.v1
  )
})
