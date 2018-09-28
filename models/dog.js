const Sequelize = require('sequelize')
const db = require('./index')

const Dog = db.define('dogs', {
      name: Sequelize.STRING,
      id: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true}
})

module.exports = {
  Dog
}