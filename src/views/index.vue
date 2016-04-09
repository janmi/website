<template>
    <my-banner v-bind:data-banner="banners"></my-banner>
    <my-type></my-type>
    <my-list v-bind:data-list="goods"></my-list>
</template>

<script>
  module.exports = {
    data:function(){
      return {
        banners: [],
        goods: [],
        msg:""
      }
    },
    route:{
      data:function(transition){
        var data = require('../../data_json/index.json'); 
        console.log(data);
        var that = this;
        that.$http.get({url: 'https://jsonp.afeld.me/?url=https://github.com/janmi/vue-website/blob/master/data_json/index.json',}).then(function(response){
          that.$data.banners = response.data.bannerData;
          that.$data.goods = response.data.goodsData;
          console.log('请求成功！')
        }, function(response){
          console.log('请求失败，请稍后再试')
        })
        that.$data.banners = data.bannerData;
        that.$data.goods = data.goodsData;
      }
    },
    components:{
      "myBanner": require('../components/banner.vue'),
      "myType": require('../components/type_nav.vue'),
      "myList": require('../components/list.vue')
    }
  }
</script>