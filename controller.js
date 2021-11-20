const conn = require("./conn");

exports.createEmp = (data) => {
  return new Promise((resolve, reject) => {
    conn.query('INSERT INTO emptable SET ?', data, (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
}

exports.findEmp = () => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM emptable', (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
}

exports.deleteEmp = (id) => {
  return new Promise((resolve, reject) => {
    conn.query('DELETE FROM emptable WHERE id', [id], (error, results) => {
      if (error) return reject(error);
      return resolve(results);
    });
  });
}