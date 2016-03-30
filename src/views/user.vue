<style lang="less">
  @import url(../assets/less/module.less);
  .user-head{
    height:2.0rem;
    background-color: #ff5000;
    .px2px(font-size, 32);
    a{
      display:flex;
      align-items:center;
      box-sizing: border-box;
      width:100%;
      height:2rem;
      padding-left: 0.2rem;
      color:#fff;
    }
    .user-name{
      display:block;
      flex:1;
    }
    span:last-child{
      display:block;
      position: relative;
      width:1.55rem;
      height:0.666667rem;
      line-height:0.666667rem;
      background-color: #e54800;
      z-index: 10;
      text-align: center;
      text-indent: -0.053333rem;
      &:before{
        content:"";
        position: absolute;
        top:0;
        left: -0.265333rem;
        width:0.666667rem;
        height:0.666667rem;
        border-top-left-radius: 100%;
        border-bottom-left-radius: 100%;
        background-color: #e54800;
        z-index: -1;
      }
    }
    .user-pic{
      display:block;
      margin-right: 0.2rem;
      width:1.333333rem;
      height:1.333333rem;
      border-radius: 50%;
      border: 2px solid #fff;
    }
  }

  .user-nav{
    width:100%;
    margin-top: 0.266667rem;
    background-color: #fff;
    border-bottom: 0.026667rem solid #e7e7e7;
  }

  .order-all{
    padding:0.333333rem;
    display:flex;
    align-items:center;
    border-bottom: 1px solid #e7e7e7;
    .px2px(font-size, 32);
    color:#595e60;
    .tit{
      display:block;
      flex:1;
    }
    span:last-child{
      color:#adadad;
      .px2px(font-size, 24);
    }
  }
  .user-nav-cont{
    position: relative;
    display:flex;
    align-items:center;
    justify-content: center;
    padding:0.2rem 0;
    text-align: center;
    &:after{
      position: absolute;
      bottom:0;
      left: 0;
      content: '';
      width:100%;
      height:1px;
      background-color: #d9d9d9;
    }
    a{
      position: relative;
      display:block;
      flex:1;
      color:#051b28;
      .px2px(font-size, 28);
      span{
        display:inline-block;
        width:100%;
        margin-bottom: -0.133333rem;
        .px2px(font-size, 44);
        color:#999;
      }
      i{
        position: absolute;
        top:.035rem;
        left:50%;
        margin-left: .14rem;
        padding:0.04rem;
        width:0.35rem;
        height:0.35rem;
        line-height: .38rem;
        border: 0.026667rem solid #ff5000;
        background-color: #ff5000;
        border-radius: 50%;
        color:#fff;
        .px2px(font-size, 24);
        font-style:normal;
      }
    }
  }
  .user-grid-nav{
    width:100%;
    margin-top: 0.266667rem;
    border-bottom: 0.026667rem solid #e7e7e7;
    background-color: #fff;
    overflow: hidden;
    a{
      position: relative;
      float: left;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      width:25%; // 如果采用 flex 布局，元素的宽不是固定值(如：2rem、100px)，采用的是百分比的度量单位，则元素设置的 border 为1px时需要转换为 对应的 rem 度量单位，不然在 IOS 手机上有可能会出现有一部分的元素的 border 是粗的，一部分是细的。 
      height:2.626667rem;
      .px2px(font-size, 28);
      color:#051b28;
      box-sizing: border-box;
      border-bottom: 0.0133333rem solid #e7e7e7;
      border-right: 0.0133333rem solid #e7e7e7;
      span{
        display:block;
        width:100%;
        .px2px(font-size, 60);
        color:#ff5000;
        text-align: center;
      }
    }
  }
  [data-dpr="1"] .user-grid-nav a {
    border-bottom: 1px solid #e7e7e7;
    border-right: 1px solid #e7e7e7;
  }
</style>
<template>
  <div class="m-user">
      <div class="user-head">
        <a href="#" title="">
          <img class="user-pic" src="http://ww4.sinaimg.cn/mw690/6366f357gw1f27ze6s9cbj21e01e01fa.jpg" alt="">
          <span class="user-name">小小小蜜蜂</span>
          <span><i class="icon-font icon-grade"></i> 会员</span>
        </a>
      </div>
      <div class="user-nav">
        <a href="#" title="" class="order-all">
          <span class="tit">我的订单</span>
          <span>查看全部订单 <i class="icon-font icon-arrowsR"></i></span>
        </a>
        <div class="user-nav-cont">
          <a href="#" title="">
            <span class="icon-font icon-settle"></span>
            待付款
            <i>10</i>
          </a>
          <a href="#" title="">
            <span class="icon-font icon-send"></span>
            待发货
            <i>1</i>
          </a>
          <a href="#" title="">
            <span class="icon-font icon-getgood"></span>
            待收货
            <i>1</i>
          </a>
          <a href="#" title="">
            <span class="icon-font icon-evaluate"></span>
            待评价
            <i>1</i>
          </a>
          <a href="#" title="">
            <span class="icon-font icon-afterSales"></span>
            售后
            <i>1</i>
          </a>
        </div>
      </div>
      <div class="user-grid-nav">
          <a href="#" title="">
            <span class="icon-font icon-collectGood"></span>
            收藏宝贝
          </a>
          <a href="#" title="">
            <span class="icon-font icon-collectShop"></span>
            收藏店铺
          </a>
          <a href="#" title="">
            <span class="icon-font icon-collectDetail"></span>
            收藏内容
          </a>
          <a href="#" title="">
            <span class="icon-font icon-foot"></span>
            足迹
          </a>
          <a href="#" title="">
            <span class="icon-font icon-roll"></span>
            卡卷包
          </a>
          <a href="#" title="">
            <span class="icon-font icon-lightning"></span>
            闪电信用
          </a>
          <a href="#" title="">
            <span class="icon-font icon-centre"></span>
            会员中心
          </a>
          <a href="#" title="">
            <span class="icon-font icon-openShop"></span>
            我要开店
          </a>
      </div>
  </div>
</template>


<script>
    module.exports = {
        data:function() {
            return {
                user:'这里是用户中心'
            }
        }
    }
</script>