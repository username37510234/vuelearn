<template>
  <div>
    <div class="text" :class="classObject">텍스트.</div>
    <button @click="toggleClass">toggle</button>
    <button @click="hasError = !hasError">toggle</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup(){
    const isActive = ref(true);
    const hasError = ref(false);
    const classObject = reactive({
      active : isActive,
      'text-danger' : hasError
    })
    const toggleClass = () =>{
      isActive.value = !isActive.value
    }
    return { classObject,hasError,toggleClass };
  }
}
</script>

<style scoped>
.active{
  font-weight: 900;
}
.text-danger{
  color: red;
}
</style>