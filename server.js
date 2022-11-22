// Import required packages
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = inquirer();

// Middleware


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'password',
    database: 'employees_db'
  },
  console.log(`Connected to the employee database.`)
);

inquirer.createPromptModule({
  
})