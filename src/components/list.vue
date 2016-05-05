<style lang="less">
  @import url(../assets/less/list.less);
</style>
<template>
  <div class="m-list">
    <ul class="goods">
      <template v-for="goods in dataList">
        <li class="goods-item" data-id="{{goods.id}}">
          <a v-link="{name:'detail', params: { goodsId: goods.id }}"  title="goods.tit">
            <img v-bind:src="goods.picture" alt="">
            <p class="goods-name">{{goods.tit}}</p>
            <span>{{goods.price}}</span> 
          </a>
        </li>
      </template> <!-- ¥ -->
    </ul>
  </div>
</template>

<script>
  module.exports = {
    props:['dataList']
  }  
</script>