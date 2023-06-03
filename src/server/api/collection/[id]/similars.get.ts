export default defineEventHandler(async (event) => {
  const { ApiCollectionService } = useApi()
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be',
    })
  }

  return await ApiCollectionService.findSimilarsById(+id)
})
