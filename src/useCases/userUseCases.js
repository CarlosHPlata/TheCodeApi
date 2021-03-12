const { User } = require('../models/user');

exports.getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

exports.getUser = async (uid) => {
    const user = await User.findByPk(uid);

    if (!user) throw 'User not found';

    return user;
};

exports.create = async ({firstName, lastName, birthday, password, gender_id}) => {
    const date = new Date(birthday);
    date.setDate(date.getDate() + 1);

    const user = User.build({firstName, lastName, birthday: date, password, gender_id});

    if (!user.validate()) throw 'User is not valid';

    await user.save();

    return user;
};

exports.update = async ({id, firstName, lastName, birthday, password, gender_id}) => {
    const date = new Date(birthday);
    date.setDate(date.getDate() + 1);

    const user = await User.findByPk(id);

    if (!user) throw 'User cannot be found';

    await user.update({
        firstName,
        lastName,
        birthday: date,
        password,
        gender_id
    });

    return user;
};

exports.remove = async (uid) => {
    await User.destroy({
        where: {
            id: uid
        }
    });

    return true;
};
