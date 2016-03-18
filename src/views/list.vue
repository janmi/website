<style lang="less">
  .list{
    background-color: #999;
  }
</style>

<template>
  <div id="J_list" class="list">
    {{ list }}
  </div>
</template>

<script>
   module.exports = {
        data:function() {
            return {
                list:'我是列表页'
            }
        }
    }
</script>