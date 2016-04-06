<style lang="less">
  @import '../assets/less/module.less';  

  .m-cart{
    padding-bottom: 2.5rem;
  }
  .cart-total{
    position: fixed;
    left:0;
    bottom:1.2rem;
    width:100%;
    height:1.24rem;
    border-top: 1px solid #ddd;
    background-color: #fff;
  }
  .total-cont{
    display:flex;
    align-items:center;
    justify-content:center;
    height:1.24rem;
    color:#333;
    .px2px(font-size,28);
    .check-all{
      padding: 0 0.32rem;
      &-cur{
        i{
          color:#ff5000;
        }
      }
    }
    p{
      flex:1;
      text-align: right;
      span{
        color:#ff5000;
        margin-right: 0.2rem;
        &:last-child{
          .px2px(font-size,24);
          color:#333;
        }
      }
    }
    .pay{
      width:2.773333rem;
      height:1.24rem;
      line-height: 1.24rem;
      text-align: center;
      color:#fff;
      background-color: #ff5000;
      i{
        font-style: normal;
      }
    }
  }
</style>

<template>
  <div class="m-cart">
    <div class="cart-list">
      <div class="cart-goods-item">
        <div class="item-head"></div>
        <div class="item-cont"></div>
      </div>
    </div>
    <div class="cart-total">
      <div class="total-cont">
        <span class="check-all"><i class="icon-font icon-area"></i> 全选</span>
        <p> 合计: <span>¥160.00</span> <span>不含运费</span></p>
        <span class="pay">结算(<i>1</i>)</span>
      </div>
    </div>  
  </div>
</template>

<script>
  module.exports = {
    data:function(){
      return {
        carts:[]
      }
    }
  }
</script>