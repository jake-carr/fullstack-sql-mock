// Controller here
// complete building out the controller
const helpers = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    helpers.get((err, result) => {
      err ? res.status(400).send(err) : res.status(200).json(result)
    })
  },
  post: (req, res) => {
    helpers.post(req.body, (err) => {
      err ? res.status(400).send(err) : res.status(200).send('posted')
    })
  },
  put: (req, res) => {
    helpers.update(req.params.id, req.body.curr_bid, (err) => {
      err ? res.status(400).send(err) : res.status(200).send('updated')
    })
  },
  delete: (req, res) => {
    helpers.delete(req.params.id, (err) => {
      err ? res.status(400).send(err) : res.status(200).send('deleted')
    })
  }
}

module.exports = controller