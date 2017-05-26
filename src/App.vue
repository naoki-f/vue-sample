<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
    <router-link class="navbar-brand" to="/"><img src="./assets/brand/synergy.svg" width="30" height="30" alt=""></router-link>
      <router-link class="navbar-brand" to="/">Synergy</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Add">Add</router-link>
          </li>
        </ul>
      </div>
    </nav> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 10px;
}
</style>
