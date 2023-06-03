export default defineEventHandler(async (event) => {
  const { ApiCollectionService } = useApi()
  const query = getQuery(event)

  return await ApiCollectionService.findByKeyboard({
    keyword: query.keyword ?? '',
    page: query.page ?? 1,
  })
})
