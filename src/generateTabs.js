export default () => {

	const createTab = (query, name) => ({
		endpoint: process.env.IS_PROD ? 'https://cookieapp-graphql.thomas.zwarts.codes/graphql' : 'http://localhost:9380/graphql',
		query,
		name,
	});

	let obj = {};
	if (!!process.env.IS_PROD) {
		obj = {
			playground: {
				tabs: [
					createTab(`query {
  getCookie(id: 1) {
    name,
    weight,
    hasChocolate,
  }
}					
					`, 'getCookie'),
					createTab(`query {
  getCookies {
 		id,
    name,
    hasChocolate,
    weight,
  }
}`, 'getCookies'),
					createTab(`mutation {
  createCookie(name: "Stroopwafel", hasChocolate: false)
}`, 'createCookie'),
					createTab(`mutation {
  updateCookie(id: 2, name: "Verse stroopwafel", weight: 75)
}`, 'updateCookie'),
					createTab(`mutation {
  deleteCookie(id: 2)
}`, 'deleteCookie')
				]
			}
		}
	}
	return obj;
}