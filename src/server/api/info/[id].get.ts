import { ICollectionByID, IResponseWrapperCollection } from '@/server/types'
import { request } from '@/server/utils/request'

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

    response = await request<IResponse>(`/films/${id}`)
  } catch (exc) {
    console.error(exc)
  }

  return response
})
