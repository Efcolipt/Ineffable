import { request } from '@/server/api/info/utils/request'

export default defineEventHandler(async (event) => {
  return await request(`${event.context.params.id}`)
})
