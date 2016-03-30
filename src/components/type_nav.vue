<style lang="less">
@import url(../assets/less/module.less);
  .type-nav{
    padding:0.333333rem 0.333333rem 0;
    margin-bottom: 0.133333rem;
    // display:flex;
    // flex-flow:row wrap; //放不下自动换行,部分安卓机尚不支持
    background-color: #fff;
    overflow: hidden;
    .nav-item{
      float: left;
      display:block;
      width:20%;
      margin-bottom: 0.333333rem;
      text-align: center;
      color:#5f646e;
      .px2px(font-size, 24);
      span{
        display:block;
        margin:0 auto 0.133333rem;
        width:1.173333rem;
        height:1.173333rem;
        line-height: 1.173333rem;
        border-radius: 50%;  
        background-color: #f2f2f2;
        color:#ff5000;
        .px2px(font-size, 52);
      }
    }
  }
</style>

<template>
  <div class="type-nav">
     <a class="nav-item" href="#">
        <span class="icon-font icon-cat"></span>
        树懒
     </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-ju"></span>
        闪电聚
     </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-import"></span>
        闪电国际
      </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-take"></span>
        闪电外卖
      </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-superMarket"></span>
        闪电超市
     </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-full"></span>
        充值中心
     </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-tour"></span>
        闪电旅行
     </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-gold"></span>
        领金币
      </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-live"></span>
        闪电生活
      </a>
     <a class="nav-item" href="#">
        <span class="icon-font icon-type"></span>
        闪电分类
     </a>
  </div>
</template>