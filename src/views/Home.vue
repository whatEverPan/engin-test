<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Result from '../views/test_result.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Result
  },data(){
    return{

    }
  },method:{
    
  }
}
</script>
