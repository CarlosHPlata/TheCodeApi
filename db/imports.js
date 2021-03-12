const {Gender} = require("../src/models/gender");
const {User} = require("../src/models/user");

exports.imports = async (runImports) => {
    if (runImports) {
        await Gender.create({ name: 'male' });
        await Gender.create({ name: 'female' });
    
        await User.create({firstName: 'Carlos', lastName: 'Herrera', birthday: new Date(), password: 'pass', gender_id: 1});

        return 'imports complete';
    }

    return '';
}