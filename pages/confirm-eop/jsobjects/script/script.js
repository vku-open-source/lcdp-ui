export default {
	async getEOPContent() {
		const documentId = appsmith.URL.queryParams.documentId
		console.log(documentId)
		if(!documentId) {
			return ""
		}
		const res = await get_eop.run({
			documentId
		}) 
		console.log(res, documentId)
		return res.data.content
	},
	
		
	async confirmEOP() {
		const documentId = appsmith.URL.queryParams.documentId
		if(!documentId) {
			showAlert("No documentId", 'warning')
			return;
		}
		
		const res = await confirm_eop.run()
		
		await sendMessageToRocket.run({
			content: res.content
		})
		
		navigateTo('confirmed-eop', {
			documentId
		})
	}
}