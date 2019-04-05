// https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser')
// https://www.npmjs.com/package/express
const express = require('express')
// https://www.npmjs.com/package/helmet
const helmet = require('helmet')
// https://nodejs.org/api/path.html
const path = require('path')
// https://www.npmjs.com/package/dot-env
require('dotenv').config()

/**
 * Setup Express with helmet and body-parser
 */
const app = express()
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * Set `public` folder as default route to access UI
 */
app.use(express.static(path.join(__dirname, "public")))

/**
 * Redirect if user access a non-configured route
 */
app.get('*', (_, res) => {
    res.redirect('/')
})

/**
 * Setup App port and host
 */
const port = process.env.PORT || 3000,
    host = process.env.HOST || '0.0.0.0'

/**
 * Start Express server
 */
app.listen(port, host, () => {
    console.log(`App is up and running at PORT ${port}`)
})
