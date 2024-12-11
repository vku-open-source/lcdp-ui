export default {
	async getEOPContent() {
		const documentId = appsmith.URL.queryParams.documentId
		if(!documentId) {
			showAlert("No documentId", "warning")
			return ""
		}
		const res = await get_eop.run() 
		return res.data.content
	},
	
	async doneTask(task) {
		const taskDocumentId = task.documentId;
		if(!taskDocumentId) return;
		const res = await makeEopTaskDone.run({
			taskDocumentId
		})
		
		get_eop_tasks.run()
	}
	
}