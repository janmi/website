<style lang="less">
  @import '../assets/less/module.less';
  .goods-pic{
    position: fixed;
    top: 0;
    left:50%;
    margin-left: -5rem;
    width: 10.0rem;
    height:10.0rem;
    z-index: 100;
    text-align: center;
    img{
      height: 10rem;
      width: 10rem;
    }
  }
  .goods-warp{
    position: relative;
    top: 10.0rem;
    left:0;
    padding-bottom: 2rem;
    width:100%;
    background-color: #eee;
    z-index: 200;
  }
  .detail-nav{
    position: fixed;
    left:0;
    bottom:0;
    display:flex;
    width:100%;
    height:1.2rem;
    z-index: 200;
    text-align: center;
      .toggle-collect{
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      width:1.466667rem;
      height:1.2rem;
      border-top: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
      box-sizing: border-box;
      background-color: #fff;
      color:#333;
      i{
        display:block;
        margin-bottom: -0.093333rem;
        font-style: normal;
        .px2px(font-size, 32);
        color:#7f838b;
      }
    }
    .goods-buy{
      display:block;
      height:1.2rem;
      line-height: 1.2rem;
      flex:1;
      color:#fff;
      .px2px(font-size, 32);
      background-color: #ff5000;
    }
    .add-cart{
      background-color: #ff9402;
    }
  }
  
  .goods-info{
    padding:0.266667rem;
    background-color: #fff;
    .goods-name{
      display:flex;
      margin-bottom: 0.266667rem;
      p{
        flex:1;
        padding-right: 0.133333rem;
        margin-right: 0.266667rem;
        border-right: 1px solid #e7e7e7;
        .px2px(font-size,28);
      }
      span{
        display:block;
        width:1.0rem;
        text-align: center;
        color:#777;
        .px2px(font-size,28);
      }
      i{
        display:block;
      }
    }
    .goods-price{
      color:#ff5000;
      .px2px(font-size,40);
      b{
        font-weight: normal;
      }
      i{
        font-style: normal;
        .px2px(font-size,32);
      }
      span{
        padding:0 0.04rem;
        margin-right: 0.066667rem;
        border-radius: 2px;
        .px2px(font-size, 20);
        line-height: 10px;
        background-color: #ff5000;
        color:#fff;
        vertical-align: 0.066667rem;
      }
    }
  }
  .goods-column{
    margin-top: 0.266667rem;
    display:flex;
    color:#999;
    span{
      flex:1;
      text-align: center;
      &:first-child{
        text-align: left;
      }
      &:last-child{
        text-align: right;
      }
    }
  }
  .goods-row{
    display:block;
    padding:0.266667rem;
    border-bottom: 1px solid #e7e7e7;
    color:#666;
    background-color: #fff7f7;
    span{
      float: right;
    }
  }
</style>

<template>
  <div class="m-detail">
    <div class="goods-pic">
      <img src="http://gw.alicdn.com/imgextra/i4/TB1yaqgKpXXXXbDXVXXXXXXXXXX_!!0-item_pic.jpg_720x720q50s150.jpg" alt="">
    </div>
    <div class="goods-warp">
      <div class="goods-info">
        <div class="goods-name">
          <p>一年级大学季张予曦同款中长款毛衣黑色长款开衩高领打底毛衣裙</p>
          <span><i class="icon-font icon-share"></i>分享</span>
        </div>
        <div class="goods-price">
          <i>¥</i> <b>129.00</b> <span>新品大促</span><span>金币抵10%</span>
        </div>
        <div class="goods-column">
          <span>快递：10.00</span>
          <span>月销5213笔</span>
          <span>广西南宁</span>
        </div>
      </div>
      <a href="#" class="goods-row">
        <span class="icon-font icon-arrowsR"></span>
        领取优惠券
      </a>
    </div>

    <div class="detail-nav">
      <span class="toggle-collect">
          <i class="icon-font icon-collectGood"></i>
          收藏
      </span>
      <a class="toggle-collect">
        <i class="icon-font icon-openShop"></i>
        店铺
      </a>
      <span class="goods-buy add-cart">加入购物车</span>
      <a href="#" class="goods-buy" title="">立即购买</a>
    </div>
  </div>
</template>

<script>
   module.exports = {
        data:function() {
            return {
                detail:'我是详情页'
            }
        }
    }
</script>