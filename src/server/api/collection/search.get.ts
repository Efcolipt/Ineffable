export default defineEventHandler(async (event) => {
  const { apiCollectionInfo } = useApiCollection()
  const query = getQuery(event)

  return await apiCollectionInfo.findByKeyboard({
    keyword: query.keyword ?? '',
    page: query.page ?? 1,
  })
})
