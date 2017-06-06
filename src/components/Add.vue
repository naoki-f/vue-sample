<template>
<div id="app">
  <h3>■ データ登録</h3>
  <input-name></input-name>
  <input-age></input-age>
  <input-mail></input-mail>
  <br>
  <input-button></input-button>
</form>
</div>
</template>

<script>
import Vue from 'vue'
export default {

}
import PropertyStore from '../models/store.js'
import Bus from '../models/bus.js'

var InputName = Vue.extend({
  name: 'input_name',
  template: '<div class="form-gxroup"><label for="Name">Name</label><input type="text" v-model="sharedState.state.property.name" class="form-control" id="Name"></div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
//  コンポーネントを登録
Vue.component('input-name', InputName)

var InputAge = Vue.extend({
  name: 'input_age',
  template: '<div class="form-gxroup"><label for="Age">Age</label><input type="text" v-model="sharedState.state.property.age" class="form-control" id="Age"></div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
//  コンポーネントを登録
Vue.component('input-age', InputAge)

var InputMail = Vue.extend({
  name: 'input_mail',
  template: '<div class="form-gxroup"><label for="Mail">Mail Address</label><input type="text" v-model="sharedState.state.property.mail" class="form-control" id="Mail"></div>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  }
})
//  コンポーネントを登録
Vue.component('input-mail', InputMail)

// ボタンのコンポーネントを作成
var InputButton = Vue.extend({
  name: 'input-button',
  template: '<button class="btn btn-primary" v-on:click="save">Regist</button>',
  data: function () {
    return {
      privateState: {},
      sharedState: PropertyStore
    }
  },
  methods: {
    save: function (event) {
      console.log(PropertyStore.state.property.name)
      console.log(PropertyStore.state.property.age)
      console.log(PropertyStore.state.property.mail)

      // emit
      Bus.$emit('store-update', 'Add.vue')

      // リダイレクト
      this.$router.push('/List')
    }
  }
})
//  コンポーネントを登録
Vue.component('input-button', InputButton)

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
