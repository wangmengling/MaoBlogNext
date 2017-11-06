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
<<<<<<< HEAD

  // server.use(cors());
  server.use(cors({
    origin: function(ctx) {
      if (ctx.url === '/test') {
        return false;
      }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }));


=======
>>>>>>> 37ccf64e075bc0a2072554e6fdd79023a15ed0e3
  const router = new Router()

  router.get('/about', async ctx => {
    console.log("------");
    await app.render(ctx.req, ctx.res, '/about', ctx.query)
    ctx.respond = false
  })
  router.get('/articleDetail', async ctx => {
    console.log("------");
    await app.render(ctx.req, ctx.res, '/articleDetail', ctx.query)
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