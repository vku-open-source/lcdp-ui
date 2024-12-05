export default  {
	floodData: '',
	Button2onClick () {
		//	write code here
		console.log('success')
	},
	
	async generateEOP() {
		// const res = await generate_eop.run()
		// const data = res.data
		// 
		// showAlert(data.documentId, 'info')
		
		// this.floodData = '';
		// navigateTo("confirm-eop", {
			// documentId: "kn4nhug7gd8k89go6ms0n6vo"
		// })
		
		const res = get_eop.run({
			id: "kn4nhug7gd8k89go6ms0n6vo"
		})
		return res
	},

}