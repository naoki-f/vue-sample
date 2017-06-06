<template>
<div id="app">
  <h3>■ 登録データ一覧</h3>
  <grid-component></grid-component>

</div>
</template>

<script>
// インポート
import Vue from 'vue'
import Bus from '../models/bus.js'
import {Grid} from '../grid/grid.js'
import PropertyStore from '../models/store.js'

export default {
  name: 'List'
}

var receiveData = []

Vue.component('grid-component', {
  template: '<demo-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></demo-grid>',
  data: function () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'age', 'mailAddress'],
      // gridData: [{name: PropertyStore.state.property.name, age: PropertyStore.state.property.age, mailAddress: PropertyStore.state.property.mail}]
      gridData: receiveData
    }
  }
})

// メッセージ受取
Bus.$on('store-update', (vue) => {
  console.log(vue)
  receiveData.push({name: PropertyStore.state.property.name, age: PropertyStore.state.property.age, mailAddress: PropertyStore.state.property.mail})
})

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
