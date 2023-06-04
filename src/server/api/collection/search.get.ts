export default defineEventHandler(async (event) => {
  const { apiCollectionInfo } = useApiCollection()
  const query = getQuery(event)

  return await apiCollectionInfo.findByKeyboard({
    keyword: String(query.keyword ?? ''),
    page: Number(query.page ?? 1),
  })
})
