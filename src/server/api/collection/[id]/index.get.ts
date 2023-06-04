export default defineEventHandler(async (event) => {
  const { apiCollectionInfo } = useApiCollection()
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be',
    })
  }

  return await apiCollectionInfo.findOneById(+id)
})
