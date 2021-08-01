require('dotenv').config()

const { DB_USERNAME, DB_PASSWORD } = process.env

module.exports = {
    DB_USERNAME, DB_PASSWORD
}
