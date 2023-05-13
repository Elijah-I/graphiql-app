import BaseConfig from "./webpack/index.js"
import * as Dev from "./webpack/service/dev.js"
import * as Rule from "./webpack/rules/index.js"
import * as Plugin from "./webpack/plugins/index.js"
import optimization from "./webpack/service/optimization.js"

const config = {
  ...BaseConfig,

  plugins: [
    Plugin.scss,
    Plugin.html,
    Plugin.cleaner,
    Plugin.hotReload
  ],

  module: {
    rules: [
      Rule.js,
      Rule.ts,
      Rule.html,
      Rule.scss,
      Rule.assets
    ]
  },

  optimization
}

if (Dev.tool)
  config.devtool = Dev.tool

if (Dev.server)
  config.devServer = Dev.server

export default config
