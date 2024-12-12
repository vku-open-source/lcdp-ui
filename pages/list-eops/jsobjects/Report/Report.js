export default {
	EOPID: 1,
	async GenerateReport (documentId='ikydoju54xenllrv4t1rsx2i') {
		const resEop = await getEop.run({
			documentId
		})
		const eop = resEop.data.content
		
		const resTasks = await getEopTasks.run({
			eopDocumentId: documentId
		})
		const tasks = resTasks.data.map((task) => {
			return `Nhiệm vụ ID: ${task.id}\nƯu tiên: ${task.priority}\nMô tả: ${task.description}\nVị trí: ${task.location}\nTài nguyên cần thiết: ${task.resources_needed}\n---`;
		}).join('\n\n');
		
		const res = await difyGenerateReport.run({
			eop,
			tasks
		})
		const answer = res.answer;

		
		await createReport.run({
			eopDocumentId: documentId,
			content: answer
		})
		
		await this.QueryExistReportEOP();
		// this.EOPID = id;
		// const response = await Create_report.run();
		// return response;
	},
	async QueryReport (id=4) {
		this.EOPID = id;
		const response = await ReportByID.run();
		return response.data;
	},
	async QueryReports () {
		let res = await get_reports.run();
		return res.data;
	},
    async QueryExistReportEOP() {
        let res = await get_reports.run();
				res = res.data;
				console.log(res);
				// return res;
        let result = {};
        for ( let i=0;i<res.length;i++) {
					if (res[i].eop) { 
            result[res[i].eop.id] = res[i];
					}
        }
        return result;
    }
}