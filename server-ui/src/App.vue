<template>
<div class="App" :style="bgImage">
  <div style="height:2.5%"></div>
  <div :style="maxWidthHeight">
    <router-view/>
  </div>
</div>
</template>

<script>
import picture from './assets/background.jpg'
export default {
  name: 'App',
  data(){
    return{
      bgImage:{
        width:'100%',
        backgroundImage:'url('+picture+')',
        height:'100%',
      },
      maxWidthHeight:{
        width:'100%',
        height:'97.5%',
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

