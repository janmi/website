/* 
* @Author: anchen
* @Date:   2016-05-18 11:07:52
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-18 12:21:39
*/

'use strict';
var PullLoad = function(callback){
  this.init();
  this.bindEvents(callback);
}

PullLoad.prototype = {
  init:function(){
    this.TRIGGER = 1;
  },
  bindEvents:function(callback){
    var self = this;
    window.onscroll = function(){
      var scrollPos = document.body.scrollTop;
      var totalHeight = scrollPos + window.innerHeight;
      if (document.body.scrollHeight <= totalHeight && self.TRIGGER === 1) {
          typeof callback === 'function' && callback()
      }
    }
  },
  pause:function(){
    this.TRIGGER = 0;
  },
  run:function(){
    this.TRIGGER = 1;
  },
  stop:function(){
    var self = this;
    window.onscroll = null;
  }
}

module.exports = PullLoad;