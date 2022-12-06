module.exports = {
    apps: [
        {
            name: 'Whisked',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}