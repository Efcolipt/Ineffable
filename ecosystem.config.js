module.exports = {
  apps: [
    {
      name: 'Ineffable',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
