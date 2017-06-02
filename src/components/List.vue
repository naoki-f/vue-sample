<template>
<div id="app">
  <h3>■ 登録データ一覧</h3>
  <demo-grid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"
  ></demo-grid>
</div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'age', 'mailAddress'],
      gridData: [
        { name: 'Synergy taro', age: '20', mailAddress: 'xxx@xxx' }
      ]
    }
  }
}

// インポート
import Vue from 'vue'
import {Grid} from '../grid/grid.js'

// コンポーネントを登録
Vue.component('grid', Grid)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
