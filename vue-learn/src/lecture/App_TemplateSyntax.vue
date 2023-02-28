<template>
  <div>
    <h2>보간법</h2>
    <p>
      {{ message }}
    </p>
    <p v-once>{{ message }}</p>
    <button @click="message = message+'!'">click!</button>
    <hr />
    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle" @click="toggleInputDisabled">마우스를 올려보세요</div>
    <input type="text" value="호기동" v-bind:disabled="isInputDisabled" />
    <input v-bind="attrs">
    <h2>JavaScript</h2>
    {{ message.split('').reverse().join('') }}<br>
    {{ isInputDisabled ? '예':'아니오' }}
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(){
    const message = ref('안녕!');
    const rawHtml = ref('<strong>안녕하세요</strong>');
    const dynamicTitle = ref(`Hello!!`);
    const isInputDisabled = ref(true);
    const toggleInputDisabled = () =>{
      isInputDisabled.value = !isInputDisabled.value;
    }
    const attrs=ref({
      type:'password',
      value:'12345678',
      disabled:false
    })
    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      toggleInputDisabled,
      attrs
    }
  }
}
</script>

<style>

</style>