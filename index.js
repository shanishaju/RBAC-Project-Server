const jsonServer = require('json-server');
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const empsrvr = jsonServer.create()
empsrvr.use(middleware)
empsrvr.use(router)
const PORT = 3000 || process.env.PORT
empsrvr.listen(PORT, () => {
    console.log(`JSON Server is running on ${PORT}`)
})