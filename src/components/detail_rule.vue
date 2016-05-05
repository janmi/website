<style lang="less">
  @import url(../assets/less/detail.less);
</style>

<template>
  <div class="detail-rule">
    <div class="rule-mark"></div>
    <div class="rule-cont">
      <div class="rule-row clearfix">
        <div class="pic">
          <img src="http://gw.alicdn.com/imgextra/i4/TB1yaqgKpXXXXbDXVXXXXXXXXXX_!!0-item_pic.jpg_720x720q50s150.jpg" alt="">
        </div>
        <p class="price">¥129.00</p>
        <p>库存100</p>
        <p>请选择颜色分类</p>
        <span class="rule-close" v-on:click="closeRule()">
          <i class="icon-font icon-del"></i>
        </span>
      </div>
      <div class="rule-row">
        <span class="tit">颜色分类</span>
        <div class="rule-detail">
          <span class="cur">黑色</span>
        </div>
      </div>
      <div class="rule-row">
        <span class="tit">尺寸</span>
        <div class="rule-detail">
          <span>S码</span>
          <span>M码</span>
          <span>X码</span>
          <span>XL码</span>
        </div>
      </div>
      <div class="rule-row clearfix">
        <div class="sum">
          <span class="icon-font icon-cut"></span>
          <input class="" type="text" value="1">
          <span class="icon-font icon-plus"></span>
        </div>
        <span class="tit">购买数量</span>
      </div>
      <span class="rule-btn">确定</span>  
    </div>
  </div>
</template>
 
<script>
  module.exports = {
    porp:['dataRule'],
    methods:{
      closeRule:function(){
        var that = this;
        that.$parent.$data.isRule = false;
      }
    }
  }
</script>