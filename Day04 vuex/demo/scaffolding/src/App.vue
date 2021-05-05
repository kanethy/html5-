<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/access1">数据访问---页面1</router-link> |
      <router-link to="/access2">数据访问---页面2</router-link> |
      <router-link to="/changeage">修改年龄页面</router-link> |
      <router-link to="/addproduct">添加商品页面</router-link> |
      <router-link to="/ajax1">获取服务器数据</router-link> |
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
