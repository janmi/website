<style lang="less">
  @import '../assets/less/detail.less';
</style>

<template>
  <div class="m-detail">
    <div class="goods-pic">
      <img src="http://gw.alicdn.com/imgextra/i4/TB1yaqgKpXXXXbDXVXXXXXXXXXX_!!0-item_pic.jpg_720x720q50s150.jpg" alt="">
      <template v-for="pic in pics">
        <img v-bind:src="pic.picture" alt="">
      </template>
    </div>
    <div class="goods-warp">
      <div class="goods-info">
        <div class="goods-name">
          <p>{{name}}</p>
          <span><i class="icon-font icon-share"></i>分享</span>
        </div>
        <div class="goods-price">
          <i>¥</i> <b>{{price}}</b> <span>新品大促</span><span>金币抵10%</span>
        </div>
        <div class="goods-column">
          <span>快递：{{freight}}</span>
          <span>月销{{sales}}笔</span>
          <span>{{address}}</span>
        </div>
      </div>
      <div class="detail-column">
        <div class="column">
          <span>
            <i class="icon-font icon-gou"></i>
            正品保证
          </span>
          <span>
            <i class="icon-font icon-gou"></i>
            极速退款
          </span>
          <span>
            <i class="icon-font icon-gou"></i>
            七天退换
          </span>
        </div>
        <div class="column">
          <span class="integral"><b>送</b> {{integral}}闪电积分</span>
        </div>
      </div>

      <a href="#" class="goods-row">
        <span class="icon-font icon-arrowsR"></span>
        领取优惠券
      </a>
      <a href="#" class="goods-row">
        <span class="icon-font icon-arrowsR"></span>
        请选择尺码
      </a>
      <div class="detail-evaluate">
        <p>
          宝贝评价({{evaluate}})
        </p>
        <div class="evaluate-cont">
          <p class="head">
            <img src="https://img.alicdn.com/bao/uploaded/i4/TB1UGfHKVXXXXc0XXXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg" alt="">
            小小的逗比
            <span class="icon-font icon-heart"></span>
            <span class="icon-font icon-heart"></span>
            <span class="icon-font icon-heart"></span>
          </p>
          <div class="cont">
            衣服的质量是纯棉的，修身比较显身材，适合瘦瘦的G穿,穿起来靓靓的哦
          </div>
          <p class="rule">
            颜色:黑色;尺码:M
          </p>
        </div>
        <a href="#" class="look-evaluate" title="">查看全部评价</a>
      </div>
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
      <a href="javascript:;" class="goods-buy" v-on:click="setRule()" title="">立即购买</a>
    </div>
    <my-rule v-bind:data-rule="ruleArr" v-show="isRule"></my-rule>
  </div>
</template>

<script>
   module.exports = {
    data:function() {
        return {
          pics: [],
          price:'129.00',
          name: "一年级大学季张予曦同款中长款毛衣黑色长款开衩高领打底毛衣裙",
          sales:5123,
          freight:10.00,
          address:"广西南宁",
          integral:66,
          evaluate:100,
          ruleArr:[],
          isRule:false
        }
    },
    methods:{
      setRule:function(){
        var that = this;
        that.$data.isRule = true;
      }
    },
    components:{
      "myRule":require('../components/detail_rule.vue')
    }
  }
</script>