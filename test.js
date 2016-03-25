/**
 * test
 * Created by dcorns on 3/3/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
var doAjax = require('./doAjax');

console.log('ajaxGet Test status 200 ******************************************************************************************************************************************');
doAjax.ajaxGet('https://data.seattle.gov/resource/i2xy-tcyk.json', function(err, data){
  if(err){
    if(err.statusCode){
      console.dir(err);
    }
    else{
      console.error(err);
    }
  }
  else{
    console.dir(data);
  }
  console.log('ajaxGet Test  status<>200    *****************************************************************************************************************************************');
  doAjax.ajaxGet('https://data.seattle.gov/resource/ixy-tcyk.json', function(err, data) {
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
    console.log('ajaxGet Test Server Error Thrown ******************************************************************************************************************************************');
    doAjax.ajaxGet('https://data.seattle.gov/resoce/i2xy-tcyk.json', function (err, data) {
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
      console.log('ajaxGetJson Test status 200 ******************************************************************************************************************************************');
      doAjax.ajaxGetJson('https://data.seattle.gov/resource/i2xy-tcyk.json', function (err, data) {
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
        console.log('ajaxGetJson Test  status<>200 *****************************************************************************************************************************************');
        doAjax.ajaxGetJson('https://data.seattle.gov/resource/ixy-tcyk.json', function (err, data) {
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
          console.log('ajaxGetJson Test Server Error Thrown ******************************************************************************************************************************************');
          doAjax.ajaxGetJson('https://data.seattle.gov/bogus/i2xy-tcyk.json', function (err, data) {
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
            console.log('ajaxPostJson Test status 200 0r 201 ******************************************************************************************************************************************');
            doAjax.ajaxPostJson('http://jsonplaceholder.typicode.com/posts', {
              id: 2015,
              title: 'doAjax',
              body: 'post success!',
              userId: 1
            }, function (err, data) {
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
              console.log('ajaxPostJson status <200 >201 ******************************************************************************************************************************************');
              doAjax.ajaxPostJson('http://jsonplaceholder.typicode.com/pos', {}, function (err, data) {
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
                console.log('ajaxPostJson Server Error Thrown ******************************************************************************************************************************************');
                doAjax.ajaxPostJson('http://jsonplaceholder.bogus.com/pos', {}, function (err, data) {
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
                  console.log('ajaxPutJson Test status 200 ******************************************************************************************************************************************');
                  doAjax.ajaxPutJson('http://jsonplaceholder.typicode.com/posts/1', {
                    id: 2016,
                    title: 'doAjax',
                    body: 'put success!',
                    userId: 2
                  }, function (err, data) {
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
                    console.log('ajaxPutJson Test status <>200 ******************************************************************************************************************************************');
                    doAjax.ajaxPutJson('http://jsonplaceholder.typicode.com/pots/1', {
                      id: 2016,
                      title: 'doAjax',
                      body: 'put success!',
                      userId: 2
                    }, function (err, data) {
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
                      console.log('ajaxPutJson Test Server Error ******************************************************************************************************************************************');
                      doAjax.ajaxPutJson('http://jsonplaceholder.bogus.com/pots/1', {
                        id: 2016,
                        title: 'doAjax',
                        body: 'put success!',
                        userId: 2
                      }, function (err, data) {
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
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});





