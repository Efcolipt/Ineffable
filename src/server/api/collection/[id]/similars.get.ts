import {
  ICollectionSimilarByID,
  IResponseWrapperCollection,
} from '@/server/types'

export default defineEventHandler(async (event) => {
  const { fetchInfoCollectionApi } = useApi()
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be',
    })
  }

  return await fetchInfoCollectionApi<
    IResponseWrapperCollection<ICollectionSimilarByID>
  >(`/${id}/similars`)
})
