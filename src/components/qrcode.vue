<template>
  <div class="qrcode-box" v-if='isShow'>
    <p>手机访问</p>
    <div class="qrcode">
      <img src="../assets/img/qrcode.png" alt="" />
    </div>
  </div>
</template>

<script>
  module.exports = {
    data:function(){
      return {
        isShow:true
      }
    },
    ready:function(){
      this.show();
    },
    methods:{
      show:function(){
        var that = this;
        if (window.navigator.appVersion.match(/android/gi) || window.navigator.appVersion.match(/iphone/gi)) {
          that.$data.isShow = false
        }
      }
    }
  }
</script>