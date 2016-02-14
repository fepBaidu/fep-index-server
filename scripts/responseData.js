var errorType = require('./errorType');

module.exports = function(t, d, req_params) {
	var responseData = {
		errno : errorType[t].errno,
		errmsg : errorType[t].errmsg,
		data : d,
		req_params : req_params
	};

	return responseData;
}