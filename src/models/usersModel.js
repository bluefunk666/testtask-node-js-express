import { DataTypes } from 'sequelize';
import sequelize from '../db/sequilize.js';

const User = sequelize.define('users', {
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000,
    },
});

export default User;
