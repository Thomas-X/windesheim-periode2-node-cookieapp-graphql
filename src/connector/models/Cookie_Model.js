import sequelize from '../DB';
import Sequelize from 'sequelize';

const Cookie_Model = sequelize.define('cookie', {
	name: Sequelize.STRING,
	hasChocolate: Sequelize.BOOLEAN,
	weight: Sequelize.STRING,
}, {
	timestamps: false,
});

export default Cookie_Model;