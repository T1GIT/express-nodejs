const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const handlebars = require('express-handlebars')
const todoRouter = require('./routes/todo')
const { DB_USERNAME, DB_PASSWORD } = require('./environment')

const PORT = process.env.PORT || 8080

const app = express()
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRouter)

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@express-nodejs.jk9vv.mongodb.net/myFirstDatabase`,
            {
                useNewUrlParser: true,
                useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()
