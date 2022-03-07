import server from "@/utils/http";

export default {
	async getAll() {
		let { data } = await server.get("/api/goods");
		return data;
	},
};
