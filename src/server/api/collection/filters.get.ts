export default defineEventHandler(async () => {
  const { apiCollectionInfo } = useApiCollection()

  return await apiCollectionInfo.getFilters()
})
