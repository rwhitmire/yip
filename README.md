yip.js - Domless Event Management
==================================================

API
--------------------------------------

`on(name, function(params))`: set up event

`invoke(name, params)`: trigger event

`clear(name)`: clear event(s)

Usage
--------------------------------------
	
#### basic example:

	yip.on('myEvent', function(){
		console.log('myEvent called');		
	});
	
	yip.invoke('myEvent');

#### with parameters:

	yip.on('myEvent', function(param){
		console.log(param);
	});
	
	yip.invoke('myEvent', 'foo');

#### namespacing:

	yip.on('foo.bar', function(){
		console.log('bar called');
	});
	
	yip.on('foo.rab', function(){
		console.log('rab called');
	});
	
	yip.invoke('foo');

#### clearing events
	yip.clear() // clears all events
	yip.clear('foo') // clears all events named foo (or events in foo namespace)