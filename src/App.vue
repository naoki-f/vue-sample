<template>
  <div id="app">  
    <ul class="nav">
      <li  class="nav-item">
      <router-link  to="/List"><img src="./assets/brand/synergy.svg" width="30" height="30" alt=""></router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/List">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Add">Add</router-link>
      </li>
    </ul>  
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

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #DB0A22;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #DB0A22;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
