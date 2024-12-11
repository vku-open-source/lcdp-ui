export default  {
	async generateEOP() {
		// 1. get flood data by date from/to and location -> using api
	 	const res = await get_nchmf_warnings.run({
			dateFrom: dateFrom.formattedDate,
			dateTo: dateTo.formattedDate
		})
		const floodData = res.data.map(
			item => item.data.map(e => ({
				province: e.label,
				water_level: e.water_level,
				warning_type: e.warning_type,
				warning_level: e.warning_level
			}))
		).flat()
		
		const sosAlertData = await 
		
		const generateEOPRes = await generate_eop.run({
			floodData: `
${JSON.stringify(floodData)}

${otherInfo.text}
			`,
			resourceData: resourceInput.text
		})
		console.log(generateEOPRes)
		
		navigateTo('confirm-eop', {
			documentId: generateEOPRes.data.documentId
		})
		
		return generateEOPRes.data
	},

}