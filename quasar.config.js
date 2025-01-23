import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    boot: [],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
       publicPath: '/',
  minify: true, // Certifique-se de que a minificação está habilitada
      env: {
        VUE_ROUTER_MODE: process.env.VUE_ROUTER_MODE || 'history',
      },
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },
      distDir: 'dist/spa',
      vueRouterMode: 'history',

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {},

      plugins: [],
    },

    animations: [],

    ssr: {
      prodPort: 3000,

      middlewares: ['render'],

      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ['electron-preload'],

      inspectPort: 5858,

      bundler: 'packager',

      packager: {},

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'site-quasar',
      },
    },

    bex: {
      extraScripts: [],
    },
  }
})
