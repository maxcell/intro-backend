const Sequelize = require('sequelize')
const db = new Sequelize('postgresql://localhost:5432/doghouse_db', {
  operatorsAliases: false
})

// const Dog = db.define('dogs', {
//       name: Sequelize.STRING,
//       id: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true}
// })
const Dog = require('./dog')
console.log(Dog)

module.exports = {
  Dog,
  db
}