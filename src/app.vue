<style lang="less">
  @import './assets/less/common_mobile.less';
  @import './assets/less/icon.less';
  @import './assets/less/module.less';    

  body{
    background-color: #eee;
  }
  .m-warp{
    padding-bottom: 2rem;
  }
  .m-grid{
    width:10.0rem;
    margin: 0 auto;
  }
  .m-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:1.2rem;
    border-top:1px solid #d9d9d9;
    background-color: rgba(247,247,247,.95);
    .m-nav-item{
      display:block;
      flex:1;
      text-align: center;
      color:#5f646e;
      .px2px(font-size, 24);
      .icon-font{
        display:block;
        .px2px(font-size, 34);
      }
    }
    .v-link-active{
      color:#ff5000;
    }
  }
</style>
<template>
 <div class="m-warp" transition="expand">
    <div class="m-grid">
      <router-view></router-view>
    </div>
    <div class="m-nav">
      <a class="m-nav-item" v-link="{name: 'index'}">
        <span class="icon-font icon-home"></span>
        首页
      </a>
      <a class="m-nav-item" v-link="{name: 'detail'}">
        <span class="icon-font icon-cart"></span>
        购物车
      </a>
      <a class="m-nav-item" v-link="{name: 'user'}">
        <span class="icon-font icon-user"></span>
        用户中心
      </a>
    </div>
  </div>
</template>

<script>
  module.exports = {
      data:function() {
          return {
              msg: 'Welcome to your Vue.js app'
          }
      },
      ready:function(){
      }
  }
</script>