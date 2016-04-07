<style lang="less">
  @import '../assets/less/cart.less';
</style>

<template>
  <div class="m-cart">
    <div class="cart-list">
      <div class="cart-goods-item">
        <div class="item-head">
          <span class="icon-font icon-area"></span>
          <a href="#" class="shop-link">
            <span class="icon-font icon-openShop"></span>
            美美官方旗舰店
            <span class="icon-font icon-arrowsR"></span>
          </a>
          <span class="eidt">编辑</span>
        </div>
        <div class="item-cont">
          <span class="icon-font icon-area"></span>
          <div href="#" class="goods-info">
            <div class="pic">
              <a href="#">
                <img src="https://img.alicdn.com/bao/uploaded/i3/TB1PQsQKXXXXXarapXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg" alt="" />
              </a>
            </div>
            <div class="goods-detail">
              <p class="tit">【K-SPACE】独家自制款 韩国半高领 百搭破洞毛衣</p>
              <p class="rule">颜色:黑色;尺码:M</p>
              <p class="price">
                <span>¥160.00</span>
                <span>x1</span>
              </p>
            </div>
            <div class="goods-eidt">
              <p class="number">
                <span class="icon-font icon-cut"></span>
                <input type="text" value="1" />
                <span class="icon-font icon-plus"></span>
              </p>
              <p class="rule-eidt">
                颜色:黑色;尺码:M
                <span class="icon-font icon-arrowB"></span>
              </p>
              <span class="del">删除</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-goods-item">
        <div class="item-head">
          <span class="icon-font icon-area"></span>
          <a href="#" class="shop-link">
            <span class="icon-font icon-openShop"></span>
            美美官方旗舰店
            <span class="icon-font icon-arrowsR"></span>
          </a>
          <span class="eidt">编辑</span>
        </div>
        <div class="item-cont">
          <span class="icon-font icon-area"></span>
          <div href="#" class="goods-info">
            <div class="pic">
              <a href="#">
                <img src="https://img.alicdn.com/bao/uploaded/i3/TB1PQsQKXXXXXarapXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg" alt="" />
              </a>
            </div>
            <div class="goods-detail">
              <p class="tit">【K-SPACE】独家自制款 韩国半高领 百搭破洞毛衣</p>
              <p class="rule">颜色:黑色;尺码:M</p>
              <p class="price">
                <span>¥160.00</span>
                <span>x1</span>
              </p>
            </div>
            <div class="goods-eidt">
              <p class="number">
                <span class="icon-font icon-cut"></span>
                <input type="text" value="1" />
                <span class="icon-font icon-plus"></span>
              </p>
              <p class="rule-eidt">
                颜色:黑色;尺码:M
                <span class="icon-font icon-arrowB"></span>
              </p>
              <span class="del">删除</span>
            </div>
          </div>
        </div>
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