import { name, version } from '../package.json'

export default defineAppConfig({
  APP_NAME: useFirstLetterUppercase(name),
  TARGET: process.env.NODE_ENV,
  DEBUG: process.env.NODE_ENV === 'development',
  VERSION: version,
})
