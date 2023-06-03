export default defineEventHandler(async (event) => {
  const { ApiVideoService } = useApi()

  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Kinopoisk ID should be',
    })
  }

  return await ApiVideoService.findPlayerByKinopoiskId(+id)
})
