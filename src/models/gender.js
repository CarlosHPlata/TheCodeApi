const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../db/db");

class Gender extends Model {

}

Gender.init({
    gender_id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Gender'
});

exports.Gender = Gender;