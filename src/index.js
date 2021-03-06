// load .env file into process.env global
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
// init db singleton
import './connector/DB';
import Cookie_Model from "./connector/models/Cookie_Model";
import schema from './schema/schema';
import resolvers from './resolvers/index';
import generateTabs from "./generateTabs";

(async() => {
	// Sync models to DB
	await Cookie_Model.sync();
	///////

	const server = new ApolloServer({
		typeDefs: schema,
		resolvers: resolvers,
		...generateTabs(),
	});

	const app = express();
	// app.get('/world', (req,res) => res.send('hi!!'));
	server.applyMiddleware({app});

	app.get('/', (req,res) => res.redirect('/graphql'));

	const port = 9380;
	app.listen(port, () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`));
})();