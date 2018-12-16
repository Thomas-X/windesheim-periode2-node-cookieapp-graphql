require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);


class DB {

	/*
 * TODO move this to a logical location
 * Since webpack moves all imports at the top of the file and there's no guarantee that dotenv will be run as first unless we init in the constructor of the DB class
 * */
	constructor() {
		this.connect = () => {
			const {
				DB_HOST,
				DB_DIALECT,
				DB_USERNAME,
				DB_PASSWORD,
				DB_PORT,
				DB_NAME
			} = process.env;
			const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(DB_NAME, DB_USERNAME, DB_PASSWORD, {
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

		__webpack_require__(7).config();
	}

}

/* harmony default export */ __webpack_exports__["a"] = (new DB().connect());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DB__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);



const Cookie_Model = __WEBPACK_IMPORTED_MODULE_0__DB__["a" /* default */].define('cookie', {
	name: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
	hasChocolate: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.BOOLEAN,
	weight: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING
}, {
	timestamps: false
});

/* harmony default export */ __webpack_exports__["a"] = (Cookie_Model);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_server_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connector_DB__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector_models_Cookie_Model__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_schema__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers_index__ = __webpack_require__(9);
// load .env file into process.env global


// init db singleton





(async () => {
	// Sync models to DB
	await __WEBPACK_IMPORTED_MODULE_3__connector_models_Cookie_Model__["a" /* default */].sync();
	///////

	const server = new __WEBPACK_IMPORTED_MODULE_1_apollo_server_express__["ApolloServer"]({
		typeDefs: __WEBPACK_IMPORTED_MODULE_4__schema_schema__["a" /* default */],
		resolvers: __WEBPACK_IMPORTED_MODULE_5__resolvers_index__["a" /* default */]
	});

	const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
	// app.get('/world', (req,res) => res.send('hi!!'));
	server.applyMiddleware({ app });

	app.get('/', (req, res) => res.redirect('/graphql'));

	const port = 9380;
	app.listen(port, () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`));
})();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__);


const schema = __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__["gql"]`	
	type Cookie {
		id: ID!,
		name: String!,
		hasChocolate: Boolean!,
		weight: Int,
	}
	
	type Query {
		getCookie(
			id: ID!
		): [Cookie]!,
		getCookies: [Cookie]!,
	}
	type Mutation {
		createCookie(
			name: String!, 
			hasChocolate: Boolean!, 
			weight: Int
		): Boolean!,
		updateCookie(
			id: ID!, 
			name: String, 
			hasChocolate: Boolean, 
			weight: Int
		): Boolean!,
		deleteCookie(
			id: ID!
		): Boolean!,
	}
`;

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resolvers_Cookie__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = ({
	Query: {
		getCookie: __WEBPACK_IMPORTED_MODULE_0__resolvers_Cookie__["a" /* default */].getCookie,
		getCookies: __WEBPACK_IMPORTED_MODULE_0__resolvers_Cookie__["a" /* default */].getCookies
	},

	Mutation: {
		createCookie: __WEBPACK_IMPORTED_MODULE_0__resolvers_Cookie__["a" /* default */].createCookie,
		updateCookie: __WEBPACK_IMPORTED_MODULE_0__resolvers_Cookie__["a" /* default */].updateCookie,
		deleteCookie: __WEBPACK_IMPORTED_MODULE_0__resolvers_Cookie__["a" /* default */].deleteCookie
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connector_models_Cookie_Model__ = __webpack_require__(3);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



class Cookie {
	constructor() {
		this.getCookie = async (obj, { id }, context, info) => {
			try {
				return await __WEBPACK_IMPORTED_MODULE_0__connector_models_Cookie_Model__["a" /* default */].findAll({
					where: {
						id
					}
				});
			} catch (e) {
				console.log(e);
				return [];
			}
		};

		this.getCookies = async (obj, args, context, info) => {
			try {
				return await __WEBPACK_IMPORTED_MODULE_0__connector_models_Cookie_Model__["a" /* default */].findAll();
			} catch (e) {
				console.log(e);
				return [];
			}
		};

		this.createCookie = async (obj, args, context, info) => {
			try {
				await __WEBPACK_IMPORTED_MODULE_0__connector_models_Cookie_Model__["a" /* default */].create(Object.assign({}, args));
			} catch (e) {
				console.log(e);
				return false;
			}
			return true;
		};

		this.updateCookie = async (obj, _ref, context, info) => {
			let { id } = _ref,
			    rest = _objectWithoutProperties(_ref, ["id"]);

			try {
				await __WEBPACK_IMPORTED_MODULE_0__connector_models_Cookie_Model__["a" /* default */].update(Object.assign({}, rest), {
					where: {
						id
					}
				});
			} catch (e) {
				console.log(e);
				return false;
			}
			return true;
		};

		this.deleteCookie = async (obj, { id }, context, info) => {
			try {
				await __WEBPACK_IMPORTED_MODULE_0__connector_models_Cookie_Model__["a" /* default */].destroy({
					where: {
						id
					}
				});
			} catch (e) {
				console.log(e);
				return false;
			}
			return true;
		};
	}

}

/* harmony default export */ __webpack_exports__["a"] = (new Cookie());

/***/ })
/******/ ]);
//# sourceMappingURL=main.map