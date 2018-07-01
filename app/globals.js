'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "stellite.almsoft.net",
		api_url : 'https://stellite.almsoft.net/api',
		pool_server: "stellite.almsoft.net",
		coin_abbr: "XTL",
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
