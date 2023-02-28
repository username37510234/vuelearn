<template>
  <div>
    <p>author  : {{ author }}</p>
    <p>title : {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
  setup(){
    const book = reactive({
      author : 'vue team',
      year : '2020',
      title : 'vue 3 guide',
      description : 'read it now',
      price : 0
    })

    // const { author, title} = toRefs(book);
    const author = toRef(book, 'author')
    const title = toRef(book, 'title')
    console.log(typeof(title.value))
    return{
      author,
      title,
      book
    }
  }
}
</script>

<style>

</style>