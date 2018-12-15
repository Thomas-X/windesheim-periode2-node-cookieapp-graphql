import { gql } from 'apollo-server-express';

const schema = gql`	
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

export default schema;