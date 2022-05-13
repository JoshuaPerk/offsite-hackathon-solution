const axios = require('axios')

const crmUrl = 'http://bige-hackathon.herokuapp.com/api'
const driftUrl = 'https://driftapi.com/contacts'
const driftToken = 'INSERT-TOKEN-HERE' // Replace with your Drift Dev token

// Takes a Drift contactId and returns a contact object (return the "response.data.data" object)
const getDriftContact = async (contactId) => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

// Takes an email string and returns just the domain (everything after the @)
const getDomainFromEmail = (email) => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

// Returns an array of all Accounts (return the "response.data" object)
const getAccounts = async () => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

// Takes an array of accounts and a domain as a string, returns a single account where the domain matches, if possible
const filterAccountsByDomain = (accounts, domain) => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

// Returns an array of all Subscriptions (return the "response.data" object)
const getSubscriptions = async () => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

// Takes an array of subscriptions and an Id as an integer, returns an array of subscriptions if possible
const filterSubscriptionsById = (subscriptions, id) => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

// Takes an array of subscriptions and returns a formatted object of products
const getProducts = (subscriptions) => {
    try {
        // PLACE CODE HERE
        // Hint: Find a way to return an object with the following shape:
        // return {
        //     'has_chat': TRUE,
        //     'has_video': FALSE,
        //     'has_email': TRUE
        // }
    } catch (err) {
        throw err
    }
}

// Takes a Drift contactId and an object of products and updates a contact in Drift
const updateDrift = async (contactId, products) => {
    try {
        // PLACE CODE HERE
    } catch (err) {
        throw err
    }
}

module.exports = {
    getDriftContact,
    getDomainFromEmail,
    getAccounts,
    filterAccountsByDomain,
    getSubscriptions,
    filterSubscriptionsById,
    getProducts,
    updateDrift   
}