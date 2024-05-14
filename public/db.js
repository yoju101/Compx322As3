const mysql = require("mysql2");

const dbConfig = {
    // host: 'learn-mysql.cms.Waikato.ac.nz',
    host: "localhost",
    database: "compx322",
    user: "root",
    password: "mysql123",
  };
  const db = mysql.createConnection(dbConfig);
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Successfully connected to the db");
});

module.exports = db;