process.env.VUE_APP_VERSION = require('./package.json').version

// chainWebpack: config => {
//     config
//       .plugin('define')
//         .tap(args => {
//           let v = JSON.stringify(require('./package.json').version)
//           args[0]['process.env']['VERSION'] = v
//           return args
//         })
//   }