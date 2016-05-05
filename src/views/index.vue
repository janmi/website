<template>
    <my-banner v-bind:data-banner="banners"></my-banner>
    <my-type></my-type>
    <div class="icon-loading" v-if="$loadingRouteData"></div>
    <my-list v-if="!$loadingRouteData" v-bind:data-list="goods"></my-list>
    <my-qrcode></my-qrcode>
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
        var arr = [{
          id:1,
          picture:"https://gw.alicdn.com/tps/TB1qC1WJFXXXXcXXXXXXXXXXXXX-1125-352.jpg_q50.jpg",
          tit:"banner"
        },{
          id:2,
          picture:"https://img.alicdn.com/tps/TB10W1SJFXXXXXvXFXXXXXXXXXX-1125-352.jpg_q50.jpg",
          tit:"banner"
        },{
          id:3,
          picture:"https://img.alicdn.com/tps/TB13rc6JpXXXXXkXpXXXXXXXXXX-1125-352.jpg_q50.jpg",
          tit:"banner"
        }]
        that.$data.banners = arr;
        that.$http.get({url: 'https://jsonp.afeld.me/?url=http://www.ydcss.com/json/index.json',}).then(function(response){
          //response.data.bannerData;
          transition.next({
            goods:response.data.goodsData
          })
          that.$data.goods = response.data.goodsData;
          console.log('请求成功！')
        }, function(response){
          console.log('请求失败，请稍后再试')
        })
      }
    },
    components:{
      "myBanner": require('../components/banner.vue'),
      "myType": require('../components/type_nav.vue'),
      "myList": require('../components/list.vue'),
      "myQrcode": require('../components/qrcode.vue')
    }
  }
</script>