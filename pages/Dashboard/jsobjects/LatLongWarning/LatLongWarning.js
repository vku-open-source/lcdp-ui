export default {
  async getLatLongWarningList() {
    let latLongWarningList = await Warning.run();
    let response = latLongWarningList.data;

    const sourceRegex = /detailrain\(`\d+`,`(.*?)`,\d+\)/;
    const siteRegex = /Mã trạm:\s*<b>(.*?)<\/b>/;

    // Iterate over the response to add extracted values
    response = response.map(item => {
      const popupInfo = item.popupInfo;

      // Extract 'Nguồn' and 'Mã trạm' using regex
      const sourceMatch = popupInfo.match(sourceRegex);
      const siteMatch = popupInfo.match(siteRegex);

      // Add extracted values to the item
      return {
        ...item,
        source: sourceMatch ? sourceMatch[1] : null,
        stationCode: siteMatch ? siteMatch[1] : null,
      };
    });

    return response;
  }
};
