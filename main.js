/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * test
	 * Created by dcorns on 3/3/16
	 * Copyright © 2016 Dale Corns
	 */
	'use strict';
	var doAjax = __webpack_require__(1);

	console.log('ajaxGet Test...');
	doAjax.ajaxGet('https://data.seattle.gov/resource/i2xy-tcyk.json', function(err, data){
	  if(err) console.error(err);
	  else console.dir(data);
	  console.log('ajaxGetJson Test...');
	  doAjax.ajaxGetJson('https://data.seattle.gov/resource/i2xy-tcyk.json', function(err, data){
	    if(err) console.error(err);
	    else console.dir(data);
	    console.log('ajaxPostJson Test...');
	    doAjax.ajaxPostJson('http://jsonplaceholder.typicode.com/posts', {
	      id: 2015,
	      title: 'doAjax',
	      body: 'post success!',
	      userId: 1
	    }, function(err, data){
	      if(err) console.error(err);
	      else console.dir(data);
	      console.log('ajaxPutJson Test...');
	      doAjax.ajaxPutJson('http://jsonplaceholder.typicode.com/posts/1', {
	        id: 2016,
	        title: 'doAjax',
	        body: 'put success!',
	        userId: 2
	      }, function(err, data){
	        if(err) console.error(err);
	        else console.dir(data);
	      });
	    });
	  });
	});







/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * doAjax
	 * Created by dcorns on 1/9/16
	 * Copyright © 2016 Dale Corns
	 */
	'use strict';
	module.exports = function(){
	  return{
	    ajaxGet: function ajaxGet(url, cb, token){
	      var ajaxReq = new XMLHttpRequest();
	      ajaxReq.addEventListener('load', function(){
	        if(ajaxReq.status === 200) cb(null, ajaxReq.responseText);
	        else cb(JSON.parse(ajaxReq.responseText), null);
	      });
	      ajaxReq.addEventListener('error', function(data){
	        console.dir(ajaxReq);
	        console.dir(data);
	        cb({XMLHttpRequestError: 'A fatal error occurred, see console for more information'}, null);
	      });

	      ajaxReq.open('GET', url, true);
	      //ajaxReq.setRequestHeader('Content-Type', 'application/json');
	      if(token){
	        ajaxReq.setRequestHeader('Authorization', token);
	      }
	      ajaxReq.send();
	    },

	    ajaxGetJson: function ajaxGetJson(url, cb, token){
	      var ajaxReq = new XMLHttpRequest();
	      ajaxReq.addEventListener('load', function(){
	        if(ajaxReq.status === 200) cb(null, JSON.parse(ajaxReq.responseText));
	        else cb(JSON.parse(ajaxReq.responseText), null);
	      });
	      ajaxReq.addEventListener('error', function(data){
	        console.dir(ajaxReq);
	        console.dir(data);
	        cb({XMLHttpRequestError: 'A fatal error occurred, see console for more information'}, null);
	      });

	//Must open before setting request header, so this order is required
	      ajaxReq.open('GET', url, true);
	      //ajaxReq.setRequestHeader('Content-Type', 'application/json');
	      if(token){
	        ajaxReq.setRequestHeader('Authorization', token);
	      }
	      ajaxReq.send();
	    },
	    ajaxPostJson: function ajaxPostJson(url, jsonData, cb, token){
	      var ajaxReq = new XMLHttpRequest();
	      ajaxReq.addEventListener('load', function(){
	        if(ajaxReq.status === 201) cb(null, JSON.parse(ajaxReq.responseText));
	        else cb(JSON.parse(ajaxReq.responseText), null);
	      });
	      ajaxReq.addEventListener('error', function(data){
	        console.dir(ajaxReq);
	        console.dir(data);
	        cb({XMLHttpRequestError: 'A fatal error occurred, see console for more information'}, null);
	      });

	//Must open before setting request header, so this order is required
	      ajaxReq.open('POST', url, true);
	      ajaxReq.setRequestHeader('Content-Type', 'application/json');
	      if(token){
	        ajaxReq.setRequestHeader('Authorization', token);
	      }
	      ajaxReq.send(JSON.stringify(jsonData));
	    },
	    ajaxPutJson: function(url, jsonData, cb, token){
	      var ajaxReq = new XMLHttpRequest();
	      ajaxReq.addEventListener('load', function(){
	        if(ajaxReq.status === 200) cb(null, JSON.parse(ajaxReq.responseText));
	        else cb(JSON.parse(ajaxReq.responseText), null);
	      });
	      ajaxReq.addEventListener('error', function(data){
	        cb({XMLHttpRequestError: 'A fatal error occurred, see console for more information'}, null);
	      });

	//Must open before setting request header, so this order is required
	      ajaxReq.open('PUT', url, true);
	      ajaxReq.setRequestHeader('Content-Type', 'application/json');
	      if(token){
	        ajaxReq.setRequestHeader('Authorization', token);
	      }
	      ajaxReq.send(JSON.stringify(jsonData));
	    }
	  }
	}();

/***/ }
/******/ ]);