<style lang="less">
  @import url(../assets/less/module.less);
  .goods{
    width:100%;
    overflow: hidden;
    .goods-item{
      float: left;
      width:49.5%;
      margin-bottom: 0.133333rem;
      padding-bottom: 0.266667rem;
      background-color: #fff;
      .px2px(font-size, 28);
      &:nth-child(even){
        margin-left: 1%;
      }
      img{
        display:block;
        width:100%;
        min-height: 4.933333rem;
      }
      .googs-name{
        padding:0.133333rem 0.2rem;
        height:1.0rem;
        line-height: 1.5em;
        color: rgb(102, 102, 102);
        word-break: break-all;
        .elps-wrap();
      }
      span{
        padding:0.133333rem 0.2rem;
        color: rgb(255, 80, 0);
      }
    }
  }
</style>
<template>
  <div class="m-list">
    <ul class="goods">
      <li class="goods-item">
        <a href="#" title="">
          <img src="https://img.alicdn.com/bao/uploaded/i1/10758029236502549/T1LlLsFfpbXXXXXXXX_!!0-item_pic.jpg_q50.jpg" alt="">
          <p class="googs-name">[为你推荐]帆船模型丹麦号110cm 90CM长家居摆件圣诞礼品酒吧装饰</p>
          <span>¥160.00</span>
        </a>
      </li>

      <li class="goods-item">
        <a href="#" title="">
          <img src="https://img.alicdn.com/bao/uploaded/i3/TB1hPDSHpXXXXbsXVXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg" alt="">
          <p class="googs-name">新品桑蚕丝真丝连衣裙波西米亚沙滩吊带长裙L1327</p>
          <span>¥318.00</span>
        </a>
      </li>
      <li class="goods-item">
        <a href="#" title="">
          <img src="https://img.alicdn.com/bao/uploaded/i3/TB1ZYYNLVXXXXcrXVXXYXGcGpXX_M2.SS2_250x250.jpg" alt="">
          <p class="googs-name">Fancystyle:2016春夏显瘦气质简洁空气层时尚套装配胸章AG61022</p>
          <span>¥100.00</span>
        </a>
      </li>
      <li class="goods-item">
        <a href="#" title="">
          <img src="https://asearch.alicdn.com/bao/uploaded/i2/171090123301552071/TB2sFjhfpXXXXXEXXXXXXXXXXXX_!!96127109-0-saturn_solar.jpg" alt="">
          <p class="googs-name">秋季纯棉男士长袖衬衫修身AF衬衣休闲寸衫</p>
          <span>¥160.00</span>
        </a>
      </li>
<!--       <template v-for="goods in dataList">
        <li class="goods-item" data-id="{{goods.id}}">
          <a href="{{goods.url}}" title="">
            <img v-bind:src="goods.pic" alt="">
            <p class="googs-name">{{goods.name}}</p>
            <span>¥{{goods.price}}</span>
          </a>
        </li>
      </template> -->
    </ul>
  </div>
</template>

<script>
  module.exports = {
    props:['dataList']
  }  
</script>