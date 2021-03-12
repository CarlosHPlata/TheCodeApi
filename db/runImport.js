const { imports } = require("./imports");
const { sync } = require("./sync");
const { sequelize, force } = require("./db");

(async () => {
    await sequelize.authenticate();
})()
.then(() => {
    return sync(true, force)
})
.then(() => {
    return imports(true)
})
.then(res => {
    console.log(res);
})
.catch(e => {
    console.error(e);
})