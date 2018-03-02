try {
	var requestHandle = esri.request({
		url: esri.arcgis.utils.arcgisUrl + "/" + appid + "/data",
		content: {
			f: "json"
		},
		callbackParamName: "callback",
		load: function(response) {
			for (var key in response.values) {
				if (response.values[key] !== undefined)
					configOptions[key] = response.values[key];
			}
		}
	});
} catch (ex) {
	console.log("error - requestHandle", ex);
}
