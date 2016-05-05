<template>
  <div class="qrcode-box">
    <p>手机访问</p>
    <div class="qrcode">
      <img src="../assets/img/qrcode.png" alt="" />
    </div>
  </div>
</template>

<script>
  window.onload = function(){
    if (window.navigator.appVersion.match(/android/gi) || window.navigator.appVersion.match(/iphone/gi)) {
        document.querySelector('.qrcode-box').className += ' qrcode-box-cur'
    }
  }

</script>