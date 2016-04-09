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
      .goods-name{
        padding:0.133333rem 0.2rem;
        height:1.0rem;
        line-height: 0.55rem;
        color: rgb(102, 102, 102);
        word-break: break-all;
        .elps-wrap();
      }
      span{
        display:inline-block;
        padding:0.066667rem 0.2rem;
        color: rgb(255, 80, 0);
      }
    }
  }
</style>
<template>
  <div class="m-list">
    <ul class="goods">
      <template v-for="goods in dataList">
        <li class="goods-item" data-id="{{goods.id}}">
          <a v-link="{name:'detail', params: { goodsId: goods.id }}"  title="goods.tit">
            <img v-bind:src="goods.picture" alt="">
            <p class="goods-name">{{goods.tit}}</p>
            <span>{{goods.price}}</span> 
          </a>
        </li>
      </template> <!-- ¥ -->
    </ul>
  </div>
</template>

<script>
  module.exports = {
    props:['dataList']
  }  
</script>