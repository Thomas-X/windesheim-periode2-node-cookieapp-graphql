import Cookie_Model from "../../connector/models/Cookie_Model";

class Cookie {

	getCookie = async (obj, {id}, context, info) => {
		try {
			return await Cookie_Model.findAll({
				where: {
					id,
				}
			});
		} catch (e) {
			console.log(e);
			return [];
		}
	};

	getCookies = async (obj, args, context, info) => {
		try {
			return await Cookie_Model.findAll();
		} catch (e) {
			console.log(e);
			return [];
		}
	};

	createCookie = async (obj, args, context, info) => {
		try {
			await Cookie_Model.create({
				...args
			})
		} catch (e) {
			console.log(e);
			return false;
		}
		return true;
	};

	updateCookie = async (obj, {id, ...rest}, context, info) => {
		try {
			await Cookie_Model.update({
				...rest
				},
				{
					where: {
						id,
					}
				});
		} catch (e) {
			console.log(e);
			return false;
		}
		return true;
	};

	deleteCookie = async (obj, {id}, context, info) => {
		try {
			await Cookie_Model.destroy({
				where: {
					id,
				}
			});
		} catch (e) {
			console.log(e);
			return false;
		}
		return true;
	}
}

export default new Cookie();
