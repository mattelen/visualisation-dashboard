<template>
  <div id="app" v-if="$store.state.peopleReady">
    <div id="nav">
      <router-link to="/">Pie Charts</router-link> |
      <router-link to="/bar">Bar Charts</router-link> |
      <router-link to="/editor">Editor</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
