export default defineEventHandler(async () => {
  const { ApiCollectionService } = useApi()

  return await ApiCollectionService.getFilters()
})
