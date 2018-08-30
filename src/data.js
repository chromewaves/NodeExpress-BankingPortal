const fs = require('fs')
const path = require('path')

const accounts = JSON.parse(fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8'))
const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8'))
const writeJSON = () => {
  fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), JSON.stringify(accounts, null, 4), 'utf8')
}

module.exports = { accounts, users, writeJSON }
