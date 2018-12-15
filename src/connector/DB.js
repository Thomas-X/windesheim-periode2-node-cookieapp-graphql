import Sequelize from 'sequelize';

class DB {

	/*
	* TODO move this to a logical location
	* Since webpack moves all imports at the top of the file and there's no guarantee that dotenv will be run as first unless we init in the constructor of the DB class
	* */
	constructor() {
		require('dotenv').config();
	}

	connect = () => {
		const {
			DB_HOST,
			DB_DIALECT,
			DB_USERNAME,
			DB_PASSWORD,
			DB_PORT,
			DB_NAME,
		} = process.env;
		const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
			host: DB_HOST,
			dialect: DB_DIALECT,
			port: DB_PORT,
			pool: {
				max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
			},
			// http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
			operatorsAliases: false
		});
		return sequelize;
	};
}

export default (
	new DB()
)
	.connect();