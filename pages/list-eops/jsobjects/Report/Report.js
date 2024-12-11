export default {
	EOPID: 1,
	async GenerateReport (id=13) {
		this.EOPID = id;
		const response = await Create_report.run();
		await get_eops.run();
		return response;
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
            result[res[i].eop.id] = res[i];
        }
        return result;
    }
}