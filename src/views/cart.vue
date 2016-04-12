<style lang="less">
  @import '../assets/less/cart.less';
</style>

<template>
  <div class="m-cart">
    <div class="cart-list">
      <template v-for="cart in carts">
        <div class="cart-goods-item" data-id="{{cart.index}}">
          <div class="item-head">
              <span class="checkbox-item icon-font" v-on:click="selectItem(cart.isSelect, $index)" v-bind:class="{'icon-area': !cart.isSelect, 'icon-areaGou': cart.isSelect}" ></span>
            <a href="#" class="shop-link">
              <span class="icon-font icon-openShop"></span>
              {{cart.shopName}}
              <span class="icon-font icon-arrowsR"></span>
            </a>
            <span v-on:click="eidtItem($index)" class="eidt">
              <template v-if="!cart.isEidt">编辑</template>
              <template v-else>完成</template>
            </span>
          </div>
          <div class="item-cont">
            <span v-on:click="selectItem(cart.isSelect, $index)" class="checkbox-item icon-font" v-bind:class="{'icon-area': !cart.isSelect, 'icon-areaGou': cart.isSelect}"></span> 
            <div class="goods-info">
              <div class="pic">
                <a v-link="{name:'detail', params: { goodsId: cart.goodsId }}">
                  <img v-bind:src="cart.picture" alt="" />
                </a>
              </div>
              <div class="goods-eidt" v-if="cart.isEidt">
                <p class="number">
                  <span class="icon-font icon-cut"></span>
                  <input type="text" value="{{cart.number}}" />
                  <span class="icon-font icon-plus"></span>
                </p>
                <p class="rule-eidt" v-on:click="eidtRule()">
                  {{cart.rule}}
                  <span class="icon-font icon-arrowB"></span>
                </p>
                <span class="del" v-on:click="delItem(cart.isSelect, $index)">删除</span>
              </div>
              <div class="goods-detail" v-else>
                <p class="tit">{{cart.tit}}</p>
                <p class="rule">{{cart.rule}}</p>
                <p class="price">
                  <span>¥{{cart.price}}</span>
                  <span>x{{cart.number}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="cart-total">
      <div class="total-cont">
        <span class="check-all" v-on:click="total()" v-bind:class="{'check-all-cur': all}"><i class="icon-font " v-bind:class="{'icon-areaGou': all, 'icon-area': !all}"></i> 全选</span>
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
        all:false,
        isRule:false
      }
    },
    route:{
      data:function(transition){
        var that = this;
        
        that.$http.get({url: 'https://jsonp.afeld.me/?url=http://www.ydcss.com/json/cart.json',}).then(function(response){
          response.data.cartData.forEach(function(item, index){
            item.index = 'item'+item.index;
            item.isEidt = false;
          })
          that.$data.carts = response.data.cartData;
          console.log('请求成功');
        }, function(response){
          console.log('请求失败，请稍后再试')
        })
        
      }
    },
    methods:{
      /*
        统计
       */
      total:function(){
        var that = this;
        var newData = that.$data.carts; 
        var numbers = newData.length;
        var prices = 0;

        if (that.$data.all === false) {
          that.$data.all = true;
          newData.forEach(function(item, index){
            prices += parseFloat(item.price);
            item.isSelect = true;
          })

          that.$data.totalPrice = prices.toFixed(2);
          that.$data.totalnumber = numbers;
        }else {
          that.$data.all = false;
          newData.forEach(function(item, index){
            item.isSelect = false;
          })
          that.$data.totalPrice = '0.00'
          that.$data.totalnumber = 0;
        }
      },
      /*
        选择支付商品
       */
      selectItem:function(status, index){
        var that = this;
        if (status) {
          that.$data.carts[index].isSelect = false;
          that.$data.all = false;
          that.totalItem()
        }else {
          that.$data.carts[index].isSelect = true;
          that.totalItem()
        }
      },
      /*
        统计项
       */
      totalItem:function(){
        var that = this;
        var newCart = [];
        var prices = 0;

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
      },
      /*
        编辑商品
       */
      eidtItem:function(index){
        var that = this;
        if (that.$data.carts[index].isEidt === false) {
          that.$data.carts[index].isEidt = true;
        }else{
          that.$data.carts[index].isEidt = false;
        }
      },
      /*
        编辑规格
       */
      eidtRule:function(id){
        var that = this;
        that.$data.isRule = true;
        window.router.app.isShow = false;
      },
      /*
        删除项
       */
      delItem:function(status, index){
        var that = this;
        if (confirm('确认要删除这个宝贝吗？')) {
          that.$data.carts.splice(index, 1);
          status === true ? that.totalItem() : '';
        }
      }
    },
    components:{
      "myRule": require('../components/detail_rule.vue')
    }
  }
</script>