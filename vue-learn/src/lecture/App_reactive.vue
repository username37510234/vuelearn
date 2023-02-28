<template>
  <div>
    <button @click="increment">Click! {{ state.count }}</button>
    <button @click="increment">Deep Click! {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup(){
    const state = reactive({
      count:0,
      deep:{
        count:0
      }
    })
    const increment = () =>{
      state.count++
    }
    return {
      state,
      increment,

    }
  }
}
</script>

<style>

</style>