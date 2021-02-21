
// const Products = require('./models.js');
const db = require('./index.js');



const adjectives = ['Used', 'New', 'Refurbished', "PARTS ONLY"];
const brand = ['Sonny', 'Ninetendo', 'Microhard', 'Azeus', 'Sansong', 'Apull', 'Wowhey', 'Illogitech'];
const noun = ['Smartphone', 'Monitor', 'Headphones', 'Earbuds', 'Trashcan', 'Laptop', 'Gaming System', 'TV', 'Personal Air Conditioning Unit', 'Gaming Mouse', 'Tablet', 'Flip Phone', 'Pager'];

const createProduct = () => {
  let product = {};
  product.item = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  product.min_cost = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.curr_bid = parseFloat(Math.ceil(Math.random() * Math.ceil(10000)));
  product.ends_in = Math.ceil(Math.random() * Math.ceil(3));
  // the lorempixel images render very slowly for some reason.
  // don't worry too much if some images load while the others don't.
  // it's probably not your fault
  product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  return product
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 10; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}
// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const insertMockData = function() {
  let list = createProducts();
  for (let product of list) {
    db.query(`INSERT INTO stock (item, min_cost, curr_bid, ends_in, img) VALUES ('${product.item}', ${product.min_cost}, ${product.curr_bid}, ${Number(product.ends_in)}, '${product.image}')`, (err) => {
      err ? console.log('err', err) : console.log('seeded ', product.item)
    })
  }
};


// same thing for seeding some users
const prefixes = ['@', '#', '!', "_"];
const names = ['weilly', 'chris', 'justine', 'joshhertz', 'jonathim', 'hyungjooyoon', 'ZACH', 'canthinkofname'];
const passwords = ['pass', 'passwordZ', 'word', 'cool', 'secure', 'unhackable']

const randomUser = () => {
  let product = {};
  product.username = `${prefixes[Math.floor(Math.random() * Math.floor(prefixes.length))]}${names[Math.floor(Math.random() * Math.floor(names.length))]}`;
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  product.password = `${passwords[Math.floor(Math.random() * Math.floor(passwords.length))]}${getRandomInt(10)}${passwords[Math.floor(Math.random() * Math.floor(passwords.length))]}`
  return product
};

const createUsers = () => {
  let usersArr = [];
  for(let i = 0; i < 5; i++){
    usersArr.push(randomUser())
  }
  return usersArr
}

const insertMockUsers = function() {
  let list = createUsers();
  for (let u of list) {
    db.query(`INSERT INTO users (username, password) VALUES ('${u.username}', '${u.password}')`, (err) => {
      err ? console.log('err', err) : console.log('seeded ', u.username)
    })
  }
};

insertMockData();
insertMockUsers();

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
