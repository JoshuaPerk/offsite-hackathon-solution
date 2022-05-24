const express = require('express')
const bodyParser = require('body-parser')
const ngrok = require('ngrok')
const {
    getDriftContact,
    getDomainFromEmail,
    getAccounts,
    filterAccountsByDomain,
    getSubscriptions,
    filterSubscriptionsById,
    getProducts,
    updateDrift   
} = require('./utils')

// Setup the app
const port = 8080
const app = express()
app.use(bodyParser.json())
ngrok.connect(port).then(url => console.log(`Your app is running here: ${url}`))

// When a button is clicked (in reality, might use contact_identified — not sure if this gets fired when a contact is identified via integration ie. MAP)
app.post('/', async (req, res) => {
    try {
        // Get the contactId from the request
        // Exchange it for the full contact info (getDriftContact)
        // Extract the domain from the contact's email (getDomainFromEmail)
        // Grab all the accounts in the DB (getAccounts)
        // Find the account from the users domain (filterAccountsByDomain)
        // Grab all the subscriptions in the DB (getSubscriptions)
        // Filter to show only subscriptions owned by account (filterSubscriptionsById)
        // Combine the subscriptions into a product object (getProducts)
        // Update product ownership in Drift (updateDrift)
        res.send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

// Ignore! Just a test to ensure the app is running via NGROK (open in browser to test)
app.get('/', async (req, res) => {
    res.send('Hello world!')
})

app.listen(port)
// Terminal: npm run start