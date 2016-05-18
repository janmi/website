<style lang="less">
  @import url(../assets/less/list.less);
</style>
<template>
  <div class="m-list">
    <ul class="goods">
      <template v-for="goods in goodsList">
        <li class="goods-item" data-id="{{goods.id}}" data-index="{{$index}}">
          <a v-link="{name:'detail', params: { goodsId: goods.id }}"  title="goods.tit">
            <img v-bind:src="goods.picture" alt="">
            <p class="goods-name">{{goods.tit}}</p>
            <span>{{goods.price}}</span> 
          </a>
        </li>
      </template> <!-- ¥ -->
    </ul>
    <div class="icon-loading-more" v-if="isLoad"></div>
  </div>
</template>

<script>
  var Load = require('../assets/js/pullLoad.js');

  module.exports = {
    props:['dataList'],
    data:function(){
      return {
        goodsList:[],
        isLoad:false
      }
    },
    ready:function(){
      var that = this;
      that.$data.goodsList = that.dataList;
      var load = new Load(function(){
        that.getData();
      })
    },
    methods:{
      getData:function(){
        var that = this;
        that.$data.isLoad = true;
        setTimeout(function(){
          that.$http.get({url: 'https://jsonp.afeld.me/?url=http://www.ydcss.com/json/index.json',}).then(function(response){
            that.$data.isLoad = false;
            that.$data.goodsList = that.$data.goodsList.concat(response.data.goodsData);
          }, function(response){
            that.$data.isLoad = false;
            console.log('请求失败，请稍后再试')
          })
        }, 5000)
      }
    }
  }  
</script>