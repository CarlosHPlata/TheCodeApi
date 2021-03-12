const { Sequelize } = require('sequelize');

const DATABASE = 'thecode';
const USER = 'root';
const PASSWORD = '';
const HOST = 'localhost';
const PORT = '3307';

const SYNC = false;
const FORCE = false;

const RUN_IMPORTS = false;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    dialect: 'mysql',
    host: HOST,
    port: PORT
});


exports.sequelize = sequelize;
exports.sync = SYNC;
exports.force = FORCE;
exports.runImports = RUN_IMPORTS;