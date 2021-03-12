const userUseCases = require("../useCases/userUseCases");

const readAll = (req, res) => {
    userUseCases.getAllUsers()
    .then( users => {
        res.json({users: users ?? []});
    })
    .catch( e => {
        console.error(e);
        res.status(200).send({message: 'Error'});
    });
};

const read = (req, res) => {
    const uid = req.params.id;
    if (!uid) res.status(200).send({message: 'No user id provided'});

    userUseCases.getUser(uid)
    .then( user => {
        res.json({user});
    })
    .catch(e => {
        console.error(e);
        res.status(200).send({message: 'user not found'});
    });
};

const create = (req, res) => {
    if (!req.body?.user) res.status(200).send({message: 'No user provided'});

    userUseCases.create(req.body.user)
    .then( user => {
        res.json({user});
    })
    .catch(e => {
        console.error(e);
        res.status(200).send({message: 'user can\'t be created'});
    });
};

const update = (req, res) => {
    if (!req.body?.user?.id) res.status(200).send({message: 'No user provided'});

    userUseCases.update(req.body.user)
    .then( user => {
        res.json({user});
    })
    .catch(e => {
        console.error(e);
        res.status(200).send({message: 'user can\'t be updated'});
    })
};

const remove = (req, res) => {
    const uid = req.params.id;
    if (!uid) res.status(200).send({message: 'No user id provided'});

    userUseCases.remove(uid)
    .then(removed => res.json({removed}))
    .catch(e => {
        console.error(e);
        res.status(200).send({message: 'user can\'t be removed'});
    })
};


exports.read = read;
exports.readAll = readAll;
exports.create = create;
exports.update = update;
exports.remove = remove;