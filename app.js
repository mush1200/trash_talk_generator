const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const list = require('./contents.json')
const trashTalkGenerator = require('./models/generate_trash_talk')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true} ))

app.get('/', (req, res) => {
  res.render('index', {careers: list.job})
})

app.post('/', (req, res) => {
  const trashtalk = trashTalkGenerator(req.body.career)
  res.render('index', { careers: list.job, trashtalk: trashtalk})
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}.`)
})