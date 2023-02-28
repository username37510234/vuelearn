<template>
  <div>
    <div :style="styleObject">ldfwhefihweiofhqoiefhqklflahnsdoifnawoef.
    wegwoeghweoighweihgapegawpeghapeghapwehgwpaehgwapeghwapeghaw.
  wegiwhegwehgpwiehgpwehgpwehgpwhegpwhgphawegpaweg.</div>
  <button @click="fontSize--">-</button>
  <button @click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup(){
    // const styleObject = reactive({
    //   color : 'red',
    //   fontSize : '13px'
    // })
    const fontSize = ref(22)
    const styleObject = computed(() =>{
      return {
      color : 'red',
      fontSize : fontSize.value + 'px'
      }
    });
    return{
      styleObject,
      fontSize
    }
  }
}
</script>

<style>

</style>