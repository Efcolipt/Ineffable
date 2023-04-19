import { ICollectionByID, IResponseWrapperCollection } from '@/server/types'
import { request } from '@/server/utils/request'

type IResponse = IResponseWrapperCollection<ICollectionByID>

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be',
    })
  }

  return await request<IResponse>(`/films/${id}`)
})
