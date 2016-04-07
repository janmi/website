<style lang="less">
  .m-banner{
    position: relative;
    height:3.066667rem;
    img{
      width:100%;
    }
  }
  .swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
  }
  .swipe-wrap {
    overflow: hidden;
    position: relative;
  }
  .swipe-wrap > div {
    float:left;
    width:100%;
    position: relative;
  }
  .swipe-tab{
    position: absolute;
    right:0.4rem;
    bottom:0.066667rem;
    span{
      display:inline-block;
      width:0.24rem;
      height:0.24rem;
      border-radius: 50%;
      background-color: rgba(248,248,248,.8);
      border:0.026667rem solid #d9d9d9;
    }
    .cur{
      background-color: #ff5000;
    }
  }
</style>

<template>
  <div class="m-banner">
    <div id='slider' class='swipe'>
      <div class='swipe-wrap'>
        <div class="swipe-wrap-item"><a href="#" title=""><img src="https://img.alicdn.com/tps/TB1mbxTMXXXXXcHXVXXXXXXXXXX-1125-352.jpg_q50.jpg" alt=""></a></div>
        <div class="swipe-wrap-item"><a href="#" title=""><img src="https://img.alicdn.com/tps/TB11xOiMXXXXXc4aXXXXXXXXXXX-1125-352.jpg_q50.jpg" alt=""></a></div>
        <div class="swipe-wrap-item"><a href="#" title=""><img src="https://gw.alicdn.com/tps/i1/TB1cOFVMXXXXXcbXFXXdIns_XXX-1125-352.jpg_q50.jpg" alt=""></a></div>
        <!-- <template v-for="banner in dataBanner">
          <div class="swipe-wrap-item"><a v-link="{name:'detail', params: { goodsId: banner.id }}" title=""><img v-bind:src="banner.picture" alt="{{banner.tit}}"></a></div>
        </template> -->
      </div>
    </div>
    <div class="swipe-tab">
      <!-- <template v-for="banner in dataBanner">
        <span v-bind:class="{'cur': isTab == index }"></span>
      </template> -->
      <span v-bind:class="{'cur': isTab == 0 }"></span>
      <span v-bind:class="{'cur': isTab == 1 }"></span>
      <span v-bind:class="{'cur': isTab == 2 }"></span>
    </div>
  </div>
</template>
<script>
  var swipe = require('../../static/libs/swipe/swipe.js');
  module.exports = {
    props:['dataBanner'],
    data:function(){
      return {
        banner:[],
        isTab:0
      }
    },
    ready:function(){
      var that = this;
      var mySwipe = new swipe(document.getElementById('slider'), {
        startSlide: 0,
        speed: 500,
        auto: 3000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {
          that.$data.isTab = index;
        }
      });
      //mySwipe.stop() 停止方法
    }
  }

</script>