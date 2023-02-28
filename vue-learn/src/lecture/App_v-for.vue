<template>
  <div>
    <ul>
      <li v-for="(item,index) in evenItem" :key="item.id">
      ID: {{item.id}}, 인덱스 : {{index+1}}, {{ item.message }}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="(value,key,index) in myObject" :key="key">
      {{ index }} - {{ key }} - {{ value }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
setup(){
  const items = reactive([
    { id:1,message:'Java'},
    { id:2,message:'HTML'},
    { id:3,message:'CSS'},
    { id:4,message:'JavaScript'},
  ])

  const evenItem = computed(()=> items.filter((item)=> item.id%2===0))

  const myObject = reactive({
    title : '제목',
    author : '호기동',
    publishedAt: '2016-01-01'
  }
  )
  return {
    items,
    evenItem,
    myObject
  }
}
}
</script>

<style>

</style>