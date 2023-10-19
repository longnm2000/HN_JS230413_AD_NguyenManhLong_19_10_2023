import mysql2, { PoolOptions, Pool } from "mysql2";

const databaseConfig: PoolOptions = {
  database: "quiz",
  port: 3306,
  user: "root",
  password: "12345678",
  host: "localhost",
};

const database: Pool = mysql2.createPool(databaseConfig);

export default database.promise();