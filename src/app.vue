<style lang="less">
  @import './assets/less/common_mobile.less';
  body{
    background-color: #e2e2e2;
  }
  .bg{
    width: 200px;
    height: 200px;
    background:rgba(0,0,0,0.1) url(assets/img/4.jpg);
    color:#fff;
  }
  .m-nav{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height:50px;
    justify-content:center;
    align-items:center;
    background-color: #999;
    a{
      flex:1;
      text-align: center;
    }
  }
</style>
<template>
 <div class="m-warp" transition="expand">
    <div class="bg"></div>
    <router-view></router-view>
    <div class="m-nav"> 
      <a v-link="{name: 'list'}">列表页</a>
      <a v-link="{name: 'user'}">用户中心</a>
      <a v-link="{name: 'detail'}">详情页</a>
    </div>
  </div>
</template>

<script>
  module.exports = {
      data:function() {
          return {
              msg: 'Welcome to your Vue.js app'
          }
      }
  }
</script>