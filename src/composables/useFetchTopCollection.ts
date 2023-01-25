export const useFetchTopCollection = async () => {
  return await useLazyFetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS`,
    {
      headers: {
        'X-API-KEY': '850a24d2-f3a2-4451-b89e-1d20d8149663',
        'Content-Type': 'application/json',
      },
    }
  )
}
