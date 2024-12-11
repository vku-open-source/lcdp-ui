export default {

	handleClickShowMap(location) {
		// map.model.lat = location.lat;
		// map.model.lng = location.long;
		if(!location) {
			showAlert("Không có địa điểm cụ thể", "warning")
			return;
		}
		// showAlert(JSON.stringify(location))
		storeValue("lat", location.lat)
		storeValue("lng", location.long)
		storeValue("locationName", location.address)
		
		showModal("mapModal")
	}
}