const { defineConfig } = require('@vue/cli-service')

module.exports = {
    pwa: {
        name: 'Meliško by VRMNT',
        themeColor: '#212529',
        msTileColor: '#212529'
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
    }
})
