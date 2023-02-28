<template>
  <div>
    
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup(){
    const message = ref('');

    watch(message,(newValue, oldValue) =>{
      console.log('새값 : ', newValue);
      console.log('구값 : ', oldValue);
    })
    return{
      message
    }
  }
}
</script>

<style>

</style>