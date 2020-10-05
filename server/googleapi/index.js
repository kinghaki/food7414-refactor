// const googles = require('googleapis')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const plus = google.people('v1')
const clientid = '554281871271-1g4irrjkbdri3359in313odo8dj80dg5.apps.googleusercontent.com'
const clientsecret = 'wVT6IwL4632808buWmRV0p-v'
const redirecturl = 'http://localhost:8000/Home'
function getOAuthclient () {
  return new OAuth2(clientid, clientsecret, redirecturl)
}
function getAuthurl () {
  const oauth2client = getOAuthclient()
  const scopes = ['https://www.googleapis.com/auth/plus.me'
    // 'https://www.googleapis.com/auth/user.addresses.read',
    // 'https://www.googleapis.com/auth/user.emails.read'
  ]
  const url = oauth2client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    // If you only need one scope you can pass it as a string
    scope: scopes,
    // Optional property that passes state parameters to redirect URI
    state: { foo: 'bar' }

  })
  return url
}
exports.getAuthurl = getAuthurl
exports.getOAuthclient = getOAuthclient
exports.plus = plus
