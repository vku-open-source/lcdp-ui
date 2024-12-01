export default {
  myVar1: [],
  myVar2: {},

  async getWarningProvincesDict() {
    try {
      const response = await nchmf_warnings.run(); // Call API
      if (response && response.data) {
        const data = [response.data[0]];
        const processedData = data.map((item) => ({
          id: item.id,
          documentId: item.documentId,
          date: item.date,
          details: item.data.data.map((subItem) => ({
            title: subItem.title,
            date: subItem.date,
            time: subItem.time,
            link: subItem.link,
            type: subItem.type,
            region: subItem.region,
          })),
        }));

        const groupedByProvince = {};
        processedData.forEach((item) => {
          item.details.forEach((detail) => {
            detail.region.forEach((province) => {
              if (!groupedByProvince[province]) {
                groupedByProvince[province] = [];
              }
              groupedByProvince[province].push({
                title: detail.title,
                date: detail.date,
                time: detail.time,
                link: detail.link,
                type: detail.type.join(", "),
              });
            });
          });
        });

        this.myVar1 = groupedByProvince;
        return groupedByProvince;
      } else {
        throw new Error("No data found in response");
      }
    } catch (error) {
      console.error("Error in getWarningProvincesDict:", error);
      return {};
    }
  },

  async getWarningProvincesList() {
    try {
      const groupedByProvince = await this.getWarningProvincesDict();
      if (Object.keys(groupedByProvince).length === 0) {
        throw new Error("Grouped data is empty");
      }

      const result = Object.entries(groupedByProvince)
        .map(([province, warnings]) => ({
          province,
          warnings,
        }))
        .sort((a, b) => b.warnings.length - a.warnings.length);

      return result;
    } catch (error) {
      console.error("Error in getWarningProvincesList:", error);
      return [];
    }
  },
};
