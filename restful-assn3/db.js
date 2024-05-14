const mysql = require("mysql2");

// const dbConfig = {
//     //host: 'learn-mysql.cms.Waikato.ac.nz',
//     host: "localhost",
//     database: "compx322",
//     user: "root",
//     password: "mysql123",
//   };
//creating a connection to the database
const dbConfig = {
  host: 'learn-mysql.cms.Waikato.ac.nz',
  //host: "localhost",
  database: "yv4",
  user: "yv4",
  password: "my217158sql",
};

const db = mysql.createConnection(dbConfig);
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to the db");
});

module.exports = db;