import {
  ListTopType,
  ICollectionByTop,
  IResponseWrapperCollection,
} from '@/server/types'

export default defineEventHandler(async (event) => {
  const { fetchVideoCollectionApi } = useApi()

  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Kinopoisk ID should be',
    })
  }

  return await fetchVideoCollectionApi('/search', {
    query: {
      kp: id,
    },
  })
})
