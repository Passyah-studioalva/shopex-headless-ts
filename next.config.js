/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

/* TES SOVED 1 */
// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty',
//       }
//     }

//     return config
//   }
// }

/* TES SOVED 2 */
// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//   config.node = {
//     fs: 'empty'
//   }
//   return config
// }

/* TES SOVED 3 */
// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,

//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": false,
//           "path": false,
//           "os": false,
//         }
//       }
//       return config
//     },
//   }
// }