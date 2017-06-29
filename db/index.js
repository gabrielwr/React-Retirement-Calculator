const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/investment_calc', {
  logging: false
})

module.exports = db;
