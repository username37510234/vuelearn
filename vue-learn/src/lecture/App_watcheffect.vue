<template>
  <div>
    <form action="">
      <input v-model="title" type="text" placeholder="Title">
      <textarea cols="30" rows="10" v-model="contents" placeholder="Contents"></textarea>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {

  setup(){
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장 title : ${title}, contents: ${contents}`);
    }
    watchEffect(()=>{
      console.log('watchEffect');
      save(title.value,contents.value);
    })
    return(title,contents)
  }
}
</script>

<style>

</style>