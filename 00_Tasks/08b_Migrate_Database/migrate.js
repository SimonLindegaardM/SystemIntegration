const sql = require('mssql');
const mysql = require('mysql2/promise');

const mssqlConfig = {
  user: 'your_mssql_username',
  password: 'your_mssql_password',
  server: 'your_mssql_server',
  database: 'your_mssql_database',
};

const mysqlConfig = {
  host: 'your_mysql_host',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
};

async function migrateData() {
  let mssqlPool, mysqlConnection;
  
  try {
    // Connect to MSSQL
    mssqlPool = await sql.connect(mssqlConfig);
    console.log('Connected to MSSQL');

    // Connect to MySQL
    mysqlConnection = await mysql.createConnection(mysqlConfig);
    console.log('Connected to MySQL');

    // Query data from MSSQL
    const result = await mssqlPool.request().query('SELECT * FROM your_table');
    console.log(`Fetched ${result.recordset.length} rows from MSSQL`);

    // Insert data into MySQL
    const insertQuery = `INSERT INTO your_table (column1, column2, ...) VALUES ?`;
    const values = result.recordset.map(row => [row.column1, row.column2, ...]);

    const [rows] = await mysqlConnection.query(insertQuery, [values]);
    console.log(`Inserted ${rows.affectedRows} rows into MySQL`);

  } catch (err) {
    console.error('Error during migration:', err);
  } finally {
    // Close the connections
    if (mssqlPool) {
      await mssqlPool.close();
      console.log('Closed MSSQL connection');
    }
    if (mysqlConnection) {
      await mysqlConnection.end();
      console.log('Closed MySQL connection');
    }
  }
}

migrateData();
