/**
 * test
 * Created by dcorns on 3/3/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var doAjax = require('./doAjax');

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





