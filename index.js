require('dotenv').config()
const { MovieDb } = require('moviedb-promise')
const m = new MovieDb(process.env.API_KEY)

m.configuration().then(console.log)
