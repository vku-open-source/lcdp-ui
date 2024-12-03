export default {
	async getEOPContent() {
		const documentId = appsmith.URL.queryParams.documentId
		if(!documentId) {
			return ""
		}
		const res = await get_eop.run({
			documentId: "kn4nhug7gd8k89go6ms0n6vo"
		}) 
		return res.data.content
	},
	
		
	async confirmEOP() {
		const documentId = appsmith.URL.queryParams.documentId
		if(!documentId) return;
		
		const res = await confirm_eop.run()	
		
	}
}