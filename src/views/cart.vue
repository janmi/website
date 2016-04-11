<style lang="less">
  @import '../assets/less/cart.less';
</style>

<template>
  <div class="m-cart">
    <div class="cart-list">
      <template v-for="cart in carts">
        <div class="cart-goods-item" data-id="{{cart.index}}">
          <div class="item-head">
              <span class="icon-font" v-on:click="selectItem(cart.isSelect, $index)" v-bind:class="{'icon-area': !cart.isSelect, 'icon-areaGou': cart.isSelect}" ></span>
            <a href="#" class="shop-link">
              <span class="icon-font icon-openShop"></span>
              {{cart.shopName}}
              <span class="icon-font icon-arrowsR"></span>
            </a>
            <span class="eidt">编辑</span>
          </div>
          <div class="item-cont">
            <span v-on:click="selectItem(cart.isSelect, $index)" class="icon-font" v-bind:class="{'icon-area': !cart.isSelect, 'icon-areaGou': cart.isSelect}"></span> 
            <div class="goods-info">
              <div class="pic">
                <a v-link="{name:'detail', params: { goodsId: cart.goodsId }}">
                  <img v-bind:src="cart.picture" alt="" />
                </a>
              </div>
              <div class="goods-detail">
                <p class="tit">{{cart.tit}}</p>
                <p class="rule">{{cart.rule}}</p>
                <p class="price">
                  <span>¥{{cart.price}}</span>
                  <span>x{{cart.number}}</span>
                </p>
              </div>
              <div class="goods-eidt">
                <p class="number">
                  <span class="icon-font icon-cut"></span>
                  <input type="text" value="{{cart.number}}" />
                  <span class="icon-font icon-plus"></span>
                </p>
                <p class="rule-eidt">
                  {{cart.rule}}
                  <span class="icon-font icon-arrowB"></span>
                </p>
                <span class="del">删除</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="cart-total">
      <div class="total-cont">
        <label for="checkbox" v-on:click="total()">
          <input type="checkbox" v-model="all" id="checkbox" />
          <span class="check-all" v-bind:class="{'check-all-cur': all}"><i class="icon-font" v-bind:class="{'icon-areaGou': all, 'icon-area': !all}"></i> 全选</span>
        </label>
        <p> 合计: <span>¥{{totalPrice}}</span> <span>不含运费</span></p>
        <span class="pay">结算(<i>{{totalnumber}}</i>)</span>
      </div>
    </div>
    <my-rule v-bind:data-rule="rule" v-show="isRule"></my-rule>
  </div>

</template>

<script>
  module.exports = {
    data:function(){
      return {
        carts:[],
        rule:[],
        totalPrice:"0.00",
        totalnumber:"0",
        all:'',
        isRule:false
      }
    },
    route:{
      data:function(transition){
        var that = this;
        var data = require('../../data_json/cart.json');
        
        data.cartData.forEach(function(item, index){
          item.index = 'item'+item.index;
        })

        that.$data.carts = data.cartData;
        that.$http.get({url: 'https://jsonp.afeld.me/?url=https://github.com/janmi/vue-website/blob/master/data_json/index.json',}).then(function(response){
          console.log(response);
          that.$data.carts = response.data.cartData;
        }, function(response){
          console.log('请求失败，请稍后再试')
        })
        
      }
    },
    methods:{
      total:function(){
        var that = this;
        var newData = that.$data.carts; 
        var numbers = newData.length;
        var prices = 0;

        if (!that.$data.all) {
          newData.forEach(function(item, index){
            prices += parseFloat(item.price);
            item.isSelect = true;
          })

          that.$data.totalPrice = prices.toFixed(2);
          that.$data.totalnumber = numbers;
        }else {
          newData.forEach(function(item, index){
            item.isSelect = false;
          })
          that.$data.totalPrice = '0.00'
          that.$data.totalnumber = 0;
        }
      },
      selectItem:function(status, index){
        var that = this;
        var newCart = [];
        var prices = 0;
        function fun () {
          that.$data.carts.forEach(function(item, index){
            if (item.isSelect) {
              newCart.push(item);
              prices += parseFloat(item.price)
            }
          })
          if (newCart.length ===  that.$data.carts.length) {
            that.$data.all = true;
          };

          that.$data.totalPrice = prices.toFixed(2);
          that.$data.totalnumber = newCart.length;
        }
        if (status) {
          that.$data.carts[index].isSelect = false;
          that.$data.all = false;
          fun()
        }else {
          that.$data.carts[index].isSelect = true;
          fun()
        }
      }
    },
    components:{
      "myRule": require('../components/detail_rule.vue')
    }
  }
</script>