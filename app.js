const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/about', async ctx => {
    console.log("------");
    await app.render(ctx.req, ctx.res, '/about', ctx.query)
    ctx.respond = false
  })
  router.get('/articleList', async ctx => {
    console.log("------");
    await app.render(ctx.req, ctx.res, '/articleList', ctx.query)
    ctx.respond = false
  })

  router.get('/', async ctx => {
    console.log("------sss");
    await app.render(ctx.req, ctx.res, '/', ctx.query)
    ctx.respond = true
  })

  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query)
    ctx.respond = false
  })

  router.get('*', async ctx => {
    
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})