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
		
		// const res = await confirm_eop.run()
		// 
		// const resEopTasks = await get_eop_tasks.run()
		// const eopTasks = resEopTasks.data
		// 
  // const eopTasksStr = eopTasks.map((task) => {
    // return `Nhiệm vụ ID: ${task.id}\nƯu tiên: ${task.priority}\nMô tả: ${task.description}\nVị trí: ${task.location}\nTài nguyên cần thiết: ${task.resources_needed}\n---`;
  // }).join('\n\n');
// 
		// // send EOP to rocket.chat
		// await sendMessageToRocket.run({
			// content: res.data.content
		// })
		// 
		// await sendMessageToRocket.run({
			// content: eopTasksStr
		// })
		
		const eop = await get_eop.data;
		const eopId = eop.id;
		
		navigateTo('confirmed-eop', {
			documentId
		})
	}
}