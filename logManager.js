window.logManager = (function() {

	var allowedLogLevels = [ "debug", "log", "error", "info", "warn", "dir",
			"trace", "count" ]
	var originalConsoleCopy = {
		"debug" : window.console.debug,
		"log" : window.console.log,
		"error" : window.console.error,
		"info" : window.console.info,
		"warn" : window.console.warn,
		"dir" : window.console.dir,
		"trace" : window.console.trace,
		"count" : window.console.count
	};

	var customConsole = {
		"debug" : function() {
			return;
		},
		"log" : function() {
			return;
		},
		"error" : function() {
			return;
		},
		"info" : function() {
			return;
		},
		"warn" : function() {
			return;
		},
		"dir" : function() {
			return;
		},
		"trace" : function() {
			return;
		},
		"count" : function() {
			return;
		}
	};

	var originalAlert = window.alert;
	var customAlert = function() {
		return;
	}
	var logger = {
		enableAllLogging : function() {

			for (var i = 0; i < allowedLogLevels.length; i++) {
				window.console[allowedLogLevels[i]] = originalConsoleCopy[allowedLogLevels[i]];
			}

			return true;
		},
		disableAllLogging : function() {

			for (var i = 0; i < allowedLogLevels.length; i++) {
				window.console[allowedLogLevels[i]] = customConsole[allowedLogLevels[i]];
			}

			return true;
		},
		enableLoggingFor : function(arr) {
			this.disableAllLogging();
			for (var i = 0; i < arr.length; i++) {
				if (allowedLogLevels.indexOf(arr[i]) != -1) {
					window.console[arr[i]] = originalConsoleCopy[arr[i]]
				}
			}

			return true;
		},
		disableLoggingFor : function(arr) {
			this.enableAllLogging();
			for (var i = 0; i < arr.length; i++) {
				if (allowedLogLevels.indexOf(arr[i]) != -1) {
					window.console[arr[i]] = customConsole[arr[i]]
				}
			}

			return true;
		},
		enableAlerts : function() {
			window.alert = originalAlert;

			return true;
		},
		disableAlerts : function() {
			window.alert = customAlert;

			return true;
		}
	};

	return logger;
}());