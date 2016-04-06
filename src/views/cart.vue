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
  .cart-goods-item{
    margin-bottom: 0.266667rem;
    border-bottom: 1px solid #ddd;
  }
  .item-head{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:1.2rem;
    line-height: 1.2rem;
    background-color:#fff;
    color:#333;
    .icon-area{
      height:1.2rem;
      padding:0 0.266667rem;
      color: #9fa3b6;
      .px2px(font-size,36);
    }
    .shop-link{
      height:1.2rem;
      flex:1;
      color:#333;
      span{
        margin-right: 0.133333rem;
        .px2px(font-size,32);
        &:last-child{
          margin-left: 0.266667rem;
          .px2px(font-size,28);
          color: #999;
        }
      }
    }  
    .eidt{
      height:1.2rem;
      padding:0 0.333333rem;
    }
  }
  .item-cont{
    padding:0.133333rem 0;
    min-height: 2.453333rem;
    background-color: #f8f8f8;
    overflow: hidden;
    .icon-area{
      float: left;
      line-height: 2.453333rem;
      padding:0 0.266667rem;
      .px2px(font-size,36);
      color: #9fa3b6;
    }
    .goods-info{
      display:flex;
      .px2px(font-size,28);
      //overflow: hidden;
      .pic{
        width: 2.453333rem;
      }
      img{
        width: 2.453333rem;
        height: 2.453333rem;
        vertical-align: top;
      }
    }
  }

.goods-detail{
  display:none;
  flex:1;
  box-sizing: border-box;
  position: relative;
  height:2.453333rem;
  padding:0 0.266667rem;
  color: #3d4245;
  .tit{
    margin-bottom:0.133333rem;
    color: #3d4245;
  }
  .rule{
    color: #9c9c9c;
  }
  .price{
    position: absolute;
    left: 0;
    bottom:0;
    width:100%;
    padding:0 0.266667rem;
    box-sizing: border-box;
    line-height: 1;
    span{
      color: #ff5000;
      &:last-child{
        float: right;
        color: #3d4245;
      }
    }
  }
}
.goods-eidt{
  position: relative;
  padding:0 1.733333rem 0 0.133333rem;
  flex:1;
  .del{
    position: absolute;
    right:0;
    top:-0.133333rem;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0.133333rem 0;
    border-bottom: 1px solid #ff5000;
    width:1.6rem;
    height:100%;
    line-height: 100%;
    background-color: #ff5000;
    color: #fff;
  }
  .number{
    position: relative;
    height:1rem;
    width: 100%;
    line-height: 1rem;
    box-sizing: border-box;
    input{
      box-sizing: border-box;
      height:1.2rem;
      width: 100%;
      border:none;
      border-bottom:0.026667rem solid #fff;
      text-align: center;
      background-color: #f8f8f8;
    }
    span{
      position: absolute;
      top:0;
      display:inline-block;
      width: 1.2rem;
      border-right: 0.026667rem solid #fff;
      text-align: center;
      color: #999;
      &:last-child{
        right:0;
        border-right: none;
        border-left: 0.026667rem solid #fff;
      }
    }
  }
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
      i{
        color: #9fa3b6;
        .px2px(font-size,32);
      }
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