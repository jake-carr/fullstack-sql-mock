// complete and fix the dbhelpers
const db = require('./index.js');

const helpers = {
  get: (callback) => {
    let q = `SELECT * FROM stock`;
    db.query(q, (err, res) => {
      callback(err, res)
    })
  },

  post: (body, callback) => {
    const {item, min_cost, curr_bid, ends_in, img} = body;
    let q = `INSERT INTO stock (item, min_cost, curr_bid, ends_in, img) VALUES ('${item}', ${min_cost}, ${curr_bid}, ${Number(ends_in)}, '${img}')`;
    db.query(q, (err) => {
      callback(err)
    })
  },

  update: (id, body, callback) => {
    const {item, min_cost, curr_bid, ends_in, img} = body;
    // only need to write SET once
    let q = `UPDATE stock SET item = '${item}', min_cost = ${min_cost}, curr_bid = ${curr_bid}, ends_in = ${ends_in}, img = '${img}' WHERE id = ${id}`

    db.query(q, (err) => {
      callback(err)
    })

  },

  delete: (id, callback) => {
    let q = `DELETE FROM stock WHERE id = ${id}`;
    db.query(q, (err) => {
      callback(err)
    })
  }
}


module.exports = helpers