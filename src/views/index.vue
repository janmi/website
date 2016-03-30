<template>
    <my-banner v-bind:data-banner="banners"></my-banner>
    <my-type></my-type>
    <my-list v-bind:data-list="goods"></my-list>
    <p>{{ msg }}</p>
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