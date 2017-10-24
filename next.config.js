const path = require('path')
const glob = require('glob')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'less-loader']
      }
    ,
    //   {
    //     test: /\.s(a|c)ss$/,
    //     use: ['babel-loader', 'raw-loader',
    //       { loader: 'sass-loader',
    //         options: {
    //           includePaths: ['styles', 'node_modules']
    //             .map((d) => path.join(__dirname, d))
    //             .map((g) => glob.sync(g))
    //             .reduce((a, c) => a.concat(c), [])
    //         }
    //       }
    //     ]
    //   },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader", options: {
                paths: [
                    path.resolve(__dirname, "node_modules")
                ]
            }
        }]
    }
    )
    return config
  }
}