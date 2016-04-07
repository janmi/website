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
        var that = this;
        // that.$http({url: '../assets/data_json/index.json', method: 'GET'}).then(function(response){
        //   console.log(response)
        // }, function(response){
        //   console.log(response)
        // })
        that.$http.get({url: 'https://jsonp.afeld.me/?url=http://jsonview.com/example.json',}).then(function(response){
          console.log(response)
        }, function(response){
          console.log(response)
        })
        that.$data.msg = "测试获取数据";
        that.$data.banners.push('banner1');
        that.$data.goods.push('goods1');
      }
    },
    components:{
      "myBanner": require('../components/banner.vue'),
      "myType": require('../components/type_nav.vue'),
      "myList": require('../components/list.vue')
    }
  }
</script>