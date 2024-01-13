export default defineEventHandler(async () => {
  const { getIndexPageMovies } = useApiKinopoiskDev()

  return await getIndexPageMovies()
})
