<template>
 <div class="m-warp" transition="expand">
    {{ msg }}
  </div>
</template>

<script>
  module.exports = {
      data:function() {
          return {
              msg: '我是异步模块'
          }
      }
  }
</script>