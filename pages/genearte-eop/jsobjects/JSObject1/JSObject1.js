export default {
	Button2onClick () {
		//	write code here
		console.log('success')
	},
	
	async generateEOP() {
		// const res = await generate_eop.run()
		// const data = res.data
		// 
		// showAlert(data.documentId, 'info')
		navigateTo("confirm-eop", {
			documentId: "kn4nhug7gd8k89go6ms0n6vo"
		})
	},

}