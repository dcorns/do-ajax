#doAjax
A lightweight tool for consuming json data with ajax requests

## Getting Started

```shell
npm install doAjax --save
```

### Overview
In your project file `var doAjax = require('doAjax');`.
Use a tool like [Browerify](http://browserify.org/) or [Webpack](https://webpack.github.io/) to use require in your client side scripts.
All functions expect a 200 HTTP response from server to be consider a successful transaction except *ajaxPostJson* which requires a 201 response. If the transaction succeeds, but the server does not send the right response code, the valid data returned by the server will probably show up in the err argument.

### Usage Examples
####Returns json data as json string: ajaxGet

Parameters:

    +<String>url
    +<Function>cb Callback function
    +<String>token optionally provide a token if server uses for authentication

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
_(nothing yet)_

## License
Copyright (c) 2015 Dale Corns. Licensed under the MIT license.