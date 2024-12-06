export default {
  async getVNDMSWarningList() {
    let VNDMSWarningList = await vndms_warnings.run();
    let response = VNDMSWarningList.data;

    // Cập nhật regex
    const sourceRegex = /detailrain\(`\d+`,`([^`]+)`/;
    const siteRegex = /Mã trạm:\s*<b>(\d+)<\/b>/;

    const seenLabels = new Set();

    const uniqueData = response.flatMap(item =>
      item.data.map(subItem => {
        const popupInfo = subItem.popupInfo;

        // Áp dụng regex
        const sourceMatch = popupInfo.match(sourceRegex);
        const siteMatch = popupInfo.match(siteRegex);

        return {
          ...subItem,
          source: sourceMatch ? sourceMatch[1] : null,
          stationCode: siteMatch ? siteMatch[1] : null,
        };
      })
    )
    .filter(item => {
      const label = item.label;
      if (!seenLabels.has(label)) {
        seenLabels.add(label);
        return true;
      }
      return false;
    });

    return uniqueData;
  }
};
