#doAjax
A lightweight tool for consuming json data with ajax requests

## Getting Started

```shell
npm install doAjax --save
```

### Overview
In your project file `var doAjax = require('doAjax');`.
Use a tool like [Browerify](http://browserify.org/) or [Webpack](https://webpack.github.io/) to use require in your client side scripts.
All functions expect a 200 HTTP response from server to be consider a successful transaction except *ajaxPostJson* which requires a 200 or 201 response.

### Usage Examples
####ajaxGet: Returns cb(err, json string)

Parameters:

     <String> url
     <Function>cb Callback function
     <String>token optionally provide a token if server uses for authentication


    doAjax.ajaxGet('https://data.seattle.gov/resource/i2xy-tcyk.json', function(err, data){
      if(err) console.error(err);
      else console.dir(data);
    });

####Returns json data as a JavaScript Object: ajaxGetJson

Parameters:

    +<String>url
    +<Function>cb Callback function
    +<String>token optionally provide a token if server uses for authentication

    doAjax.ajaxGetJson('https://data.seattle.gov/resource/i2xy-tcyk.json', function(err, data){
      if(err) console.error(err);
      else console.dir(data);
    });

####Post json data to server: ajaxPostJson

Parameters:

    +<String>url
    +<Function>cb Callback function
    +<String>token optionally provide a token if server uses for authentication

    doAjax.ajaxPostJson('http://jsonplaceholder.typicode.com/posts', {
      id: 2015,
      title: 'doAjax',
      body: 'post success!',
      userId: 1
    }, function(err, data){
      console.dir('post data: ' + data);
      if(err) console.error(err);
      else console.dir(data);
    });

####Put json data

Parameters:

    +<String>url
    +<Function>cb Callback function
    +<String>token optionally provide a token if server uses for authentication

    doAjax.ajaxPutJson('http://jsonplaceholder.typicode.com/posts/1', {
      id: 2016,
      title: 'doAjax',
      body: 'put success!',
      userId: 2
    }, function(err, data){
      console.dir('data: '+data);
      if(err) console.error(err);
      else console.dir(data);
    });

##Testing
Open index.html in your browser and view the console with dev tools
    
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## Release History
_(2.0.0)_ In order to make the module more usable and flexible, I have made the following changes. *ajaxPostJson* now considers a 200 response from server to be a success. Now all methods include the raw ajax request object in the data object returned by load success and load error. Among other things, this allows the caller to morph an error response into success when the module interprets a request as a failure based on a response code that the you consider to be a success. All methods return an error object for catastrophic errors. So a successful load event will return this `{responseText: ajaxReq.responseText, rawAjaxRequest: ajaxReq}` and an error on load event will return `{statusCode: ajaxReq.status, rawAjaxRequest: ajaxReq}` and finally a catastrophic error will return an error object containing an error name and error message property. As in prior versions, additional error information will be logged to the console.

## License
Copyright (c) 2015 Dale Corns. Licensed under the MIT license.