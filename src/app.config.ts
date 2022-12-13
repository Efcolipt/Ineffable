import pkg from '../package.json'

export default defineAppConfig({
    APP_NAME: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),
    TARGET: process.env.NODE_ENV,
    DEBUG: process.env.NODE_ENV === "development",
    VERSION: pkg.version,
})