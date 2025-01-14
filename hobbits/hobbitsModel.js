const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return db('hobbits')
   .insert(hobbit)
   .then(([id]) => {
     return db('hobbits')
     .where({id: id})
     .first()
     .then( hobbit => hobbit)
     .catch( err => err)
   })
   .catch( err => err)
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
