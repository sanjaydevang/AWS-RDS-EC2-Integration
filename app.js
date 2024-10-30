const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'mydatabase-1.c7gaw0eq859s.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'check@123',
    database: 'mydatabase',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the RDS MySQL database');
});

// Add CRUD routes here
app.listen(80, () => {
    console.log('Server running on port 80');
});
