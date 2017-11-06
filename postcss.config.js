module.exports = {
    plugins: [
      require('postcss-easy-import')({prefix: '_'}), // keep this first
      require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
    ],
    proxy: {
      '/test/*': {
      target: 'http://localhost',
      changeOrigin: true,
      secure: false
      }
    }
  }