<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{ reactiveMessage }}</p>
    <button v-on:click="addReactivceMessage">Add Message</button>
    <h2>반응형 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button @click="addNormalMessage">Add Message</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const reactiveMessage = ref('Hello re mas');
    const addReactivceMessage = () =>{
      reactiveMessage.value = reactiveMessage.value + '!';
    }
    let normalMessage = 'Hello no mas';
    const addNormalMessage = () =>{
      normalMessage = normalMessage + '!';
      console.log(normalMessage)
    }

    return {
      reactiveMessage,normalMessage,
      addReactivceMessage,
      addNormalMessage
    }
  }
}
</script>

<style>

</style>