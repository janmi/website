var Vue = require('vue')
var router = require('vue-router')
var index = require('./app.vue');
Vue.use(router);


var app = Vue.extend(index)

// 全局注册组件 
// Vue.component('app', app); 

var router = new router({
  history:false,
  hashbang:false
})

router.map({
    '/list': {
      name: 'list',
      component: require('./views/list.vue')
    },
    '/detail': {
      name: 'detail',
      component: require('./views/detail.vue')
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

//启动路由器
router.start(app, "app");

//注册路由切换后
router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
})