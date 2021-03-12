const user = require("./src/routers/user");
const gender = require("./src/routers/gender");

function routes (app) {
    app.get('/', (req, res) => res.json({message: 'welcome to my API my name is Carlos Herrera'}));
    app.use('/user', user);
    app.use('/gender', gender);
}

exports.defineroutes = routes;