export default defineEventHandler(async (event) => {
  const { apiCollectionInfo } = useApiCollection()

  return await apiCollectionInfo.getAwaitable()
})
