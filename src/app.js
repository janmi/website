var Vue = require('vue')
var router = require('vue-router')
var index = require('./app.vue');
var resource = require('vue-resource');
Vue.use(router);
Vue.use(resource);
// 模仿淘宝开发一个app、主要功能首页、商品详情页、用户中心、订单列表、添加地址、购物车功能（使用订阅发布模式开发）
Vue.http.options.root = 'http://192.168.10.22/website/'; //配置根目录
Vue.http.options.emulateJSON = true;

window.vue = Vue
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
    '/detail/:goodsId': {
      name: 'detail',
      component: function(resolve){  
        require(['./views/detail.vue'], resolve) // 异步加载模块
      }
    },
    '/user': {
      name: 'user',
      component: require('./views/user.vue')
    },
    '/cart': {
      name: 'cart',
      component: require('./views/cart.vue')
    },
    '*': {
      component: require('./views/404.vue')
    }
})
  
//默认/重定向到user页
router.redirect({
    '/':"/user"
})

//注册路由切换前
router.beforeEach(function(transition){
    var toPath = transition.to.path;
    // document.body.scrollTop = 0
    if (toPath.indexOf('detail') > -1) {
        router.app.isShow = false;
    }else{
        router.app.isShow = true;
    }
    //document.body.className = "loading";
    transition.next()
})

//启动路由器
router.start(app, "app");


//注册路由切换后
router.afterEach(function (transition) {
    //document.body.className = "";
    console.log('成功浏览到: ' + transition.to.path)
})