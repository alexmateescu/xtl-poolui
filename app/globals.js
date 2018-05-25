'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "The MinerCartel Pool",
		api_url : 'http://test.minercartel.com/api',
		pool_server: "test.minercartel.com",
		coin_abbr: "TEST",
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
