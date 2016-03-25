/**
 * doAjax
 * Created by dcorns on 1/9/16
 * Copyright © 2016 Dale Corns
 * version 2.0.0 March 2016
 */
'use strict';
module.exports = function(){
  return{
    ajaxGet: function ajaxGet(url, cb, token){
      var ajaxReq = new XMLHttpRequest();
      ajaxReq.addEventListener('load', function(){
        if(ajaxReq.status === 200) cb(null, {responseText: ajaxReq.responseText, rawAjaxRequest: ajaxReq});
        else cb({statusCode: ajaxReq.status, rawAjaxRequest: ajaxReq}, null);
      });
      ajaxReq.addEventListener('error', function(data){
        console.dir(data);
        var err = new Error('A fatal error occurred during ajaxGet, see console for more information');
        err.name = 'XMLHttpRequestError';
        cb(err, null);
      });

      ajaxReq.open('GET', url, true);
      if(token){
        ajaxReq.setRequestHeader('Authorization', token);
      }
      ajaxReq.send();
    },

    ajaxGetJson: function ajaxGetJson(url, cb, token){
      var ajaxReq = new XMLHttpRequest();
      ajaxReq.addEventListener('load', function(){
        if(ajaxReq.status === 200) cb(null, {json: JSON.parse(ajaxReq.responseText), rawAjaxRequest: ajaxReq});
        else cb({statusCode: ajaxReq.status, rawAjaxRequest: ajaxReq}, null);
      });
      ajaxReq.addEventListener('error', function(data){
        console.dir(data);
        var err = new Error('A fatal error occurred during ajaxGetJson, see console for more information');
        err.name = 'XMLHttpRequestError';
        cb(err, null);
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
        if(ajaxReq.status === 201 || ajaxReq.status === 200) cb(null, {json: JSON.parse(ajaxReq.responseText), rawAjaxRequest: ajaxReq});
        else cb({statusCode: ajaxReq.status, rawAjaxRequest: ajaxReq}, null);
      });
      ajaxReq.addEventListener('error', function(data){
        console.dir(data);
        var err = new Error('A fatal error occurred during ajaxPostJson, see console for more information');
        err.name = 'XMLHttpRequestError';
        cb(err, null);
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
        if(ajaxReq.status === 200) cb(null, {json: JSON.parse(ajaxReq.responseText), rawAjaxRequest: ajaxReq});
        else cb({statusCode: ajaxReq.status, rawAjaxRequest: ajaxReq}, null);
      });
      ajaxReq.addEventListener('error', function(data){
        console.dir(data);
        var err = new Error('A fatal error occurred during ajaxPutJson, see console for more information');
        err.name = 'XMLHttpRequestError';
        cb(err, null);
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