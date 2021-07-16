const Sequelize = require('sequelize');

require('dotenv').config();
//create connection to our database, pass in MySQL information for username and password

const sequelize = new Sequelize('tech_blog_db', 'root', 'blue-lagoon', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})


module.exports = sequelize;