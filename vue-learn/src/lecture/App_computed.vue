<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <hr />
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
  setup(){
    const teacher = reactive({
      name : '짐코딩',
      lecture:[
        'HTML/CSS',
        'JavaScript',
        'Vue3'
      ]
    });
    
      const hasLecture = computed(() =>{
        console.log('computed');
        return teacher.lecture.length>0 ? '있음' : '없듬';
      }
      )
    const existLecture = () =>{
      console.log('method');
      return teacher.lecture.length>0 ? '익음' : '없음';
    }

    const counter = ref(0);
    const firstName = ref('호');
    const lastName = ref('기동');

    const fullName = computed({
      get(){
        return firstName.value + ' ' + lastName.value
      },
      set(value){
        console.log('value: ',value);
        console.log(value.split(' '));
        const [first,last] = value.split(' ');
        console.log('first: ', first);
        console.log('last: ', last);
      },
    });
    console.log('Console 출력: ',fullName.value);
    fullName.value = '지 코디'
    return{
      teacher,
      hasLecture,
      existLecture,
      fullName
    }
  }
}
</script>

<style>

</style>