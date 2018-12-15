import Cookie from './resolvers/Cookie';

export default {
	Query: {
		getCookie: Cookie.getCookie,
		getCookies: Cookie.getCookies,
	},

	Mutation: {
		createCookie: Cookie.createCookie,
		updateCookie: Cookie.updateCookie,
		deleteCookie: Cookie.deleteCookie,
	}
};