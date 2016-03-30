var Vue = require('vue')
var router = require('vue-router')
var index = require('./app.vue');
Vue.use(router);

// 模仿淘宝开发一个app、主要功能首页、商品详情页、用户中心、订单列表、添加地址、购物车功能（使用订阅发布模式开发）

var app = Vue.extend(index)

var router = new router({
  history:false,
  hashbang:false
})

router.map({
    '/index': {
      name: 'index',
      component: function(resolve){
        require(['./views/index.vue'], resolve)
      }
    },
    '/detail': {
      name: 'detail',
      component: function(resolve){  
        require(['./views/detail.vue'], resolve) // 异步加载模块
      }
    },
    '/user': {
      name: 'user',
      component: require('./views/user.vue')
    }
})
  
//默认/重定向到user页
router.redirect({
    '/':"/user"
})

//注册路由切换前
router.beforeEach(function(transition){
    var toPath = transition.to.path;
    //var data = JSON.parse(localStorage.getItem('shopData'));
    // document.body.scrollTop = 0
    // if (toPath.indexOf('login') > -1) {
    //     router.app.isShow = false;
    // }else{
    //     router.app.isShow = true;
    // }
    transition.next()
})

//启动路由器
router.start(app, "app");


//注册路由切换后
router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
})