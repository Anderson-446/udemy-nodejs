const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nudemy2', 'postgres', 'root', {
    host:'localhost',
    dialect: 'postgres'
})

// try {
    
//     sequelize.authenticate()
//     console.log('Conexão ao banco bem sucedida');
// } catch (error) {
//     console.log("Não foi possível conectar-se ao banco", error);
// }
module.exports = sequelize;