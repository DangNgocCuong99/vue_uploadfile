<template>
  <div id="app">
    <!-- <HomePage/> -->
    <!-- <ItemContainer/> -->
    <!-- <router-link ></router-link> -->
    <!-- <router-link to="/item">ListItem</router-link><br/><br/>
    <router-link to="/login">Login</router-link><br/><br/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ItemContainer from './containers/itemContainer.vue'
// import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {
    // ItemContainer
    // HomePage
  },
  // beforeCreate() {
  //   const token = getToken();
  //   // next-line: Use token to check authen
  //   checkLogin(token);
  // },
  beforeCreate() {
      // this.$router.push("/login"); 
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
