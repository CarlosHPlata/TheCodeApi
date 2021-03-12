const {Gender} = require("../models/gender");

//I know i should mantain the use case model that i followed by the user api, but since this only contain read functions i will ommit it

const readAll = (req, res) => {
    (async () => {
        const genders = await Gender.findAll();
        return genders;
    })()
    .then(genders => res.json({genders: genders ?? []}))
    .catch(e => { console.log(e); res.status(200).send({message: 'Error'}) });
};

const read = (req, res) => {
    const gid = req.params.id;
    if (!gid) res.status(200).send({message: 'No gender id provided'});

    (async (gid) => {
        const gender = await Gender.findByPk(gid);
        return gender;
    })(gid)
    .then(gender => res.json({gender}))
    .catch(e => { console.log(e); res.status(200).send({message: 'Error'}) });
};

exports.readAll = readAll;
exports.read = read;