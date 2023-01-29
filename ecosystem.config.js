module.exports = {
  apps: [
    {
      name: 'production',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
