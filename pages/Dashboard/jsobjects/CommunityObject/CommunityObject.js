export default {
	Date7: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),

	getDate7() {
		const date = this.Date7;
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
	},
	async getCommunity () {
		const community = await Community.run();
		return community.data;
	}
}