
// Import the necessary libraries.
const mysql = require('mysql');

// Create a connection to the database.
const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'my_database'
});

// Connect to the database.
connection.connect();

// Create a function to send data to the database.
const sendData = (username, comment) => {
 // Create a query to insert the data into the database.
 const query = `INSERT INTO comments (username, comment) VALUES ('${username}', '${comment}')`;

 // Execute the query.
 connection.query(query, (err, result) => {
   if (err) {
     console.error(err);
     return;
   }

   // Log the result.
   console.log(result);
 });
};

// Send some data to the database.
sendData('John Doe', 'This is a comment.');

// Close the connection to the database.
connection.end();