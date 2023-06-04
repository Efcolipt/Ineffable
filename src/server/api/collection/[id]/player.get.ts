export default defineEventHandler(async (event) => {
  const { apiCollectionVideo } = useApiCollection()

  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Kinopoisk ID should be',
    })
  }

  return await apiCollectionVideo.findPlayerByKinopoiskId(+id)
})
