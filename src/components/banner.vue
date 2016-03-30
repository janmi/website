<style lang="less">
  .m-banner{
    height:3.066667rem;
    img{
      width:100%;
    }
  }
</style>

<template>
  <div class="m-banner">
    <img src="https://img.alicdn.com/tps/TB1mbxTMXXXXXcHXVXXXXXXXXXX-1125-352.jpg_q50.jpg" alt="">
  </div>
</template>
<script>
  module.exports = {
    props:['dataBanner'],
    data:function(){
      return {
        banner:[]
      }
    }
  }
</script>