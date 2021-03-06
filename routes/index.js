var express = require('express');
var router = express.Router();

config = require('../utils/config')

var form_data = require('../config/form_data.json');

router.get('/', function (request, response){
	response.render('index', {
		title: config.basic.site_name || process.env.basic_site_name,
		is_desktop: (request.device.type == "desktop"),
		captcha: response.recaptcha,
		form_data: form_data
	});
})

module.exports = router;