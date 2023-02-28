<template>
  <div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup(){
    const count = ref(0);
    const state = reactive({
      count,
    });
    console.log('count : '+count.value+', state.count : '+state.count);

    const message = ref('Hello');
    const array = reactive([message]);
    console.log('array[0]: ',array[0].value);
    return{
    }
  }
}
</script>

<style>

</style>