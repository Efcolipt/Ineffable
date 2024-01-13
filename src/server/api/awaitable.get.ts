export default defineEventHandler(async () => {
  const { getAwaitable } = useApiKinopoiskDev()

  return await getAwaitable()
})
