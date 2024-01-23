const { Pool } = require('pg');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'nudemy',
    port:5432,

    max:10
});

module.exports = pool