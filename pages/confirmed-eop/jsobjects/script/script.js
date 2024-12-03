export default {
	async getEOPContent() {
		// const documentId = appsmith.URL.queryParams.documentId
		// if(!documentId) {
			// return ""
		// }
		const res = await get_eop.run() 
		return res.data.content
	},
	
}