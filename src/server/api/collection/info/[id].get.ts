import { ICollectionByID, IResponseWrapperCollection } from '@/server/types'
import { fetchCollection } from '@/server/utils/request'

type IResponse = IResponseWrapperCollection<ICollectionByID>

export default defineEventHandler(async (event): Promise<IResponse> => {
  const id = event.context.params?.id
  let response = null

  try {
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID should be',
      })
    }

    response = await fetchCollection<IResponse>(`/films/${id}`)
  } catch (exc) {
    console.error(exc)
  }

  return response
})
