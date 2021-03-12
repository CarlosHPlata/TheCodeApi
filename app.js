const express = require("express");
const bodyParser = require('body-parser');
const db = require('./db/db');

const router = require("./router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router.defineroutes(app);

const server = require('http').Server(app);
const PORT = 3000;

server.listen(PORT);
console.log(`server started on port ${PORT}`);

const checkDB = async () => {
    await db.sequelize.authenticate();
}

checkDB()
.then(() => {
    console.log('db checked and connected successfully');
    const {sync} = require("./db/sync");
    return sync(db.sync, db.force);
})
.then(message => {
    console.log(message);
    const {imports} = require("./db/imports");
    return imports(db.runImports);
})
.then(message => {
    console.log(message);
})
.catch( e => {
    console.error(e);
})
