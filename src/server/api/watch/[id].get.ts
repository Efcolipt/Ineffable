export default defineEventHandler(async (event) => {
  const { getById } = useApiKinopoiskDev()
  const id = getRouterParam(event, 'id')

  try {
    return (await getById(id)).data
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: 'Film Not Found'
    })
  }
})
