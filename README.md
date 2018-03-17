<h1>How to USE logManager.js?</h1>
Import logManager.js in your application.

<h2>Available methods</h2>
<ol>
<li>Disable all logging :

	Syntax: logManager.disableAllLogging()
	
	Parameters: None
	
	Description: Disables the methods - console.debug, console.log, console.error, console.info, console.warn, console.dir, console.trace, console.count. Once disabled, these functions will do nothing, when called.

</li>
<li>Enable all logging :

	Syntax: logManager.enableAllLogging()
	
	Parameters: None
	
	Description: Enables the methods - console.debug, console.log, console.error, console.info, console.warn, console.dir, console.trace, console.count. These functions will works as they do.

</li>
<li>Disable logging selectively:

	Syntax: logManager.disableLoggingFor([array])
	
	Parameters: An array of values consisting of ("debug", "log", "error", "info", "warn", "dir", "trace", "count")
	
	Description: Disables the methods mentioned in the array. All other methods will be enabled, i.e. they will work as they do.

</li>
<li>Enable logging selectively:

	Syntax: logManager.enableLoggingFor([array])
	
	Parameters: An array of values consisting of ("debug", "log", "error", "info", "warn", "dir", "trace", "count")
	
	Description: Enables only the methods mentioned in the array. All other methods will be disabled, i.e. they will do nothing.

</li>
<li>Disable alerts:

	Syntax: logManager.disableAlerts()
	
	Parameters: None
	
	Description: Disables the window.alert or simply alert method. The alert method will then do nothing.
	
</li>
<li>Enable alerts:

	Syntax: logManager.enableAlerts()
	
	Parameters: None
	
	Description: Enables the window.alert or simply alert method. The alert method will then work as expected.
	
</li>
</ol>
	
	