<style lang="less">
  @import url(../assets/less/module.less);
  .detail-rule{
    position: fixed;
    left:0;
    top:0;
    z-index: 300;
    width:100%;
    height:100%;
  }
  .rule-mark{
    position: absolute;
    top: 0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.6);
  }
  .rule-cont{
    position: absolute;
    left: 0;
    bottom:0;
    padding:0.266667rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px -12px 20px -5px #000;
  }
  .rule-row{
    position: relative;
    border-bottom: 1px solid #d9d9d9;
    padding:0.266667rem 0;
    color:#666;
    .px2px(font-size, 28);
    .tit{
      display:block;
    }
    .sum{
      float: right;
      text-align: center;
      span,input{
        display:inline-block;
        padding:0.266667rem;
        width:0.6rem;
        height:0.6rem;
        background-color: #e7e7e7;
        border: none;
        text-align: center;
        vertical-align: top;
        border-radius: 0.066667rem;
      }
    }
    .pic{
      float: left;
      width:3.493333rem;
      margin-right: 0.466667rem;
      padding:0.08rem 0;
      border: 1px solid #e7e7e7;
      margin-top: -1.066667rem;
      border-radius: 0.053333rem;
      background-color: #fff;
      text-align: center;
      box-shadow: 0px -12px 20px -5px #000;
      img{
        width:3.333333rem;
        border-radius: 0.066667rem;
        vertical-align: middle;
      }
    }
    .price{
      color:#ff5000;
      .px2px(font-size, 32);
    }
    .rule-close{
      position: absolute;
      right:-0.25rem;
      top: -0.4rem;
      padding:0.333333rem;
      .px2px(font-size, 32);
    }
  }
  .rule-detail{
    margin-top: 0.266667rem;
    margin-bottom: 0.133333rem;
    span{
      margin-right: 0.133333rem;
      padding:0.2rem;
      background-color: #e7e7e7;
      border-radius: 0.133333rem;
    }
    .cur{
      background-color: #ff5000;
      color:#fff;
    }
  }
  .rule-btn{
    padding:0.333333rem 0.266667rem;
    margin-left: -0.266667rem;
    margin-bottom: -0.266667rem;
    width:100%;
    display:block;
    background-color: #ff5000;
    color:#fff;
    text-align: center;
    .px2px(font-size, 32);
  }
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
        <span class="rule-close">
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

  }
</script>