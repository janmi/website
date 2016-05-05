<style lang="less">
  @import url(../assets/less/index.less);
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