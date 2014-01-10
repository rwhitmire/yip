yip.js - Domless Event Management
==================================================

[![Build Status](https://travis-ci.org/rwhitmire/yip.png?branch=master)](https://travis-ci.org/rwhitmire/yip)

API
--------------------------------------

`on(name, function(params))`: set up event

`invoke(name, params)`: trigger event

`clear(name)`: clear event(s)

Usage
--------------------------------------
	
#### basic example:

```javascript
yip.on('myEvent', function(){
	console.log('myEvent called');		
});

yip.invoke('myEvent');
```

#### with parameters:

```javascript
yip.on('myEvent', function(param){
	console.log(param);
});

yip.invoke('myEvent', 'foo');
```

#### namespacing:

```javascript
yip.on('foo.bar', function(){
	console.log('bar called');
});

yip.on('foo.rab', function(){
	console.log('rab called');
});

yip.invoke('foo');
```

#### clearing events

```javascript
yip.clear() // clears all events
yip.clear('foo') // clears all events named foo (or events in foo namespace)
```

Building
--------------------------------------
Running the following commands will build, execute tests, and deploy
to a /build directory within the project root:

	$ npm install
	$ grunt


Continuous Testing
--------------------------------------
This project uses the [Karma test runner](http://karma-runner.github.io/0.10/index.html).
Karma allows us to easily run tests in any web browser and execute tests as files are updated.

	npm install -g karma
	karma start
