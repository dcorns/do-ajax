#do-ajax
A lightweight tool for consuming json data with ajax requests

## Getting Started

```shell
npm install do-ajax --save
```

### Overview
In your project file `var doAjax = require('do-ajax');`.
Use a tool like [Browerify](http://browserify.org/) or [Webpack](https://webpack.github.io/) to require in your client side scripts.
All functions expect a 200 HTTP response from the server to be considered a successful transaction except *ajaxPostJson* which requires a 200 or 201 response. You can still accept data sent with other response codes but it will be returned in the first parameter of the call back rather than the second. And since it is returned as the first argument, the data will be response text will be found as a property of the rawAjaxRequest object. This functionality is included primarily so you can handle response codes that are supposed to indicate problems, but do not throw an error. A supplemental error object is returned as the first argument in the callback from all methods when the server throws an error. The XMLHttpRequestProgressEvent object is also logged to the console.

### Usage Examples
####ajaxGet:(200 response from server) Returns cb(null, {responseText: *json string*, rawAjaxRequest: *XMLHttpRequest object*});
####ajaxGet(<>200 response from server with no error thrown) Returns cb({statusCode: *status code*, rawAjaxRequest:*XMLHttpRequest object*}, null);

Parameters:

     <String> url
     <Function> cb Callback function
     <String> token optionally provide a token if server uses for authentication

Example ajaxGet:

```javascript
doAjax.ajaxGet('https://data.seattle.gov/resource/i2xy-tcyk.json'
, function(err, data){
    if (err) {
      if (err.statusCode) {
        console.dir(err);
      }
      else {
        console.error(err);
      }
    }
    else {
      console.dir(data);
    }
  });
```
####ajaxGetJson:(200 response from server) Returns cb(null, {json: *json data object*, rawAjaxRequest: *XMLHttpRequest object*});
####ajaxGetJson(<>200 response from server with no error thrown) Returns cb({statusCode: *status code*, rawAjaxRequest:*XMLHttpRequest object*}, null);

Parameters:

    <String>url
    <Function>cb Callback function
    <String>token optionally provide a token if server uses for authentication

Example ajaxGetJson:

```javascript
    doAjax.ajaxGetJson('https://data.seattle.gov/resource/i2xy-tcyk.json'
    , function (err, data) {
        if (err) {
          if (err.statusCode) {
            console.dir(err);
          }
          else {
            console.error(err);
          }
        }
        else {
          console.dir(data);
        }
    });
```

####ajaxPostJson:(200 response from server) Returns cb(null, {json: *json data object*, rawAjaxRequest: *XMLHttpRequest object*});
####ajaxPostJson(>201, <200 response from server with no error thrown) Returns cb({statusCode: *status code*, rawAjaxRequest:*XMLHttpRequest object*}, null);

Parameters:

    <String>url
    <Object> jsonData
    <Function>cb Callback function
    <String>token optionally provide a token if server uses for authentication

Example ajaxPostJson:

```javascript
    doAjax.ajaxPostJson('http://jsonplaceholder.typicode.com/posts'
    , {
         id: 2015
         ,title: 'doAjax'
         ,body: 'post success!'
         ,userId: 1
       }
       , function (err, data) {
           if (err) {
             if (err.statusCode) {
               console.dir(err);
             }
             else {
               console.error(err);
             }
         }
         else {
           console.dir(data);
         }
    });
```

####ajaxPutJson:(200 response from server) Returns cb(null, {json: *json data object*, rawAjaxRequest: *XMLHttpRequest object*});
####ajaxPutJson(<>200 response from server with no error thrown) Returns cb({statusCode: *status code*, rawAjaxRequest:*XMLHttpRequest object*}, null);

Parameters:

    <String>url
    <Object> jsonData
    <Function>cb Callback function
    <String>token optionally provide a token if server uses for authentication

Example ajaxPutJson:

```javascript
    doAjax.ajaxPutJson('http://jsonplaceholder.typicode.com/posts/1'
      , {
           id: 2016
           ,title: 'doAjax'
           ,body: 'put success!'
           ,userId: 2
        }
      , function (err, data) {
          if (err) {
            if (err.statusCode) {
              console.dir(err);
            }
            else {
              console.error(err);
            }
          }
          else {
            console.dir(data);
          }
    });
```

##Testing
Open index.html in your browser and view the console with dev tools
    
## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## Release History
_(2.0.0)_ In order to make the module more usable and flexible, I have made the following changes. *ajaxPostJson* now considers a 200 response from server to be a success. Now all methods include the raw ajax request object in the data object returned by load success and load error. Among other things, this allows the caller to morph an error response into success when the module interprets a request as a failure based on a response code that the you consider to be a success. All methods return an error object for catastrophic errors. So a successful load event will return this `{responseText: ajaxReq.responseText, rawAjaxRequest: ajaxReq}` and an error on load event will return `{statusCode: ajaxReq.status, rawAjaxRequest: ajaxReq}` and finally a catastrophic error will return an error object containing an error name and error message property. As in prior versions, additional error information will be logged to the console.

## License
Copyright (c) 2015 Dale Corns. Licensed under the MIT license.