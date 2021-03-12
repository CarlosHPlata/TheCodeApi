const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../db/db");
const { Gender } = require("./gender");

class User extends Model {
    validate () {
        return !(
            !this.firstName || this.firstName.length === 0 ||
            !this.lastName || this.lastName.length === 0 ||
            !this.birthday || 
            !this.password || 
            !this.gender_id || (this.gender_id > 2 || this.gender_id < 1)
        );
    }
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    password: DataTypes.STRING(40),
    gender_id: {
        type: DataTypes.TINYINT,
        references: {
            model: Gender,
            key: 'gender_id',
        }
    }
}, {
    sequelize,
    modelName: 'User'
});

exports.User = User;