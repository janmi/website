<style lang="less">
  @import './assets/less/common_mobile.less';
  @import './assets/less/icon.less';
  @import './assets/less/module.less';    

  body{
    background-color: #eee;
  }
  .loading{
    &:after{
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      display: block;
      content: "";
      width: 1rem;
      height: 1rem;
      margin-top: -.5rem;
      margin-left: -.5rem;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+");
      background-position: 50%;
      background-size: 100%;
      background-repeat: no-repeat;
      animation: preloader-spin 1s steps(12, end) infinite;
    }
  }
  @keyframes preloader-spin{
      100%{
          transform:rotate(360deg);
      }
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
    z-index: 1000;
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
        margin-bottom: -0.093333rem;
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
    <div class="m-nav" v-show="isShow">
      <a class="m-nav-item" v-link="{name: 'index'}">
        <span class="icon-font icon-home"></span>
        首页
      </a>
      <a class="m-nav-item" v-link="{name: 'cart'}">
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
            isShow: true
          }
      },
      ready:function(){
      }
  }
</script>