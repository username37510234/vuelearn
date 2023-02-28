<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage}}</p>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
  setup(){
    const message = ref('Hello123');
    const reverseMessage = ref('Hello123');

    const reverseFunction = newValue =>{
      console.log('즉시 실행')
      reverseMessage.value = message.value.split('').reverse().join('');
    }
    watch( message, reverseFunction);
    reverseFunction()
    return{
      message,
      reverseMessage
    }
  }
}
</script>

<style>

</style>