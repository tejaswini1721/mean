const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "192.168.64.5", // localhost
  user: "mysql",
  password: "mysql",
  database: "mydb",
};

let processSingleFile = async (inputFile) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  const sql =
    "INSERT INTO fileupload (filename, originalname, uid) values (?, ?, ?)";

  await connection.queryAsync(sql, [
    inputFile.filename,
    inputFile.originalname,
    1,
  ]);

  await connection.endAsync();
};

let processMultiFile = async (fileList) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  for (let i = 0; i < fileList.length; i++) {
    const inputFile = fileList[i];

    const sql =
      "INSERT INTO fileupload (filename, originalname, uid) values (?, ?, ?)";

    await connection.queryAsync(sql, [
      inputFile.filename,
      inputFile.originalname,
      1,
    ]);
  }

  await connection.endAsync();
};

let fileList = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  const sql = "SELECT * FROM fileupload"; //
  const results = await connection.queryAsync(sql, []);

  await connection.endAsync();

  return results;
};

module.exports = { processSingleFile, processMultiFile, fileList };
