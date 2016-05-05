<style lang="less">
  @import url(../assets/less/banner.less);
</style>

<template>
  <div class="m-banner">
    <div id='slider' class='swipe'>
      <div class='swipe-wrap'>
        <template v-for="banner in dataBanner">
          <div class="swipe-wrap-item"><a v-link="{name:'detail', params: { goodsId: banner.id }}" title=""><img v-bind:src="banner.picture" alt="{{banner.tit}}"></a></div>
        </template>
      </div>
    </div>
    <div class="swipe-tab">
      <template v-for="banner in dataBanner">
        <span v-bind:class="{'cur': isTab == $index }"></span>
      </template>
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
      setTimeout(function(){
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
      },1000)
      //mySwipe.stop() Í£Ö¹·½·¨
    }
  }

</script>