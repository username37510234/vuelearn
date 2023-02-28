<script setup>
</script>

<template>
<div><button @click="increment">Counter : {{ counter }}</button></div>
<div id="javatest"></div>
</template>

<script>
export default{
  data(){
    return{
      counter:0
    };
  },
  methods:{
    increment(){
      this.counter++;
    }
  }
}</script>
<style scoped>

</style>
