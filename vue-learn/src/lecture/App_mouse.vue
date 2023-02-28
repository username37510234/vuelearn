<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click.stop="clickP">
          P영역
          <span @click="clickSpan">
            SPAN 영역
            <a href="https://naver.com" @click.prevent="clickA">A 영역</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
setup(){
  const clickDiv = () =>{
    console.log('clickDiv');
  }
  const clickP = () =>{
    console.log('clickP');
    alert('ajacnj');
  }
  const clickSpan = (e) =>{
    console.log('clickSpan');
    e.stopPropagation();
    alert('ㅈㅇㅇ');
  }
  const clickA = () =>{
    console.log('clickA');
    alert('넘어간다아');
  }
  return{
    clickDiv,
    clickP,
    clickSpan,
    clickA
  }
}
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}
#modifiers div{
  background-color: #ccc;
}
#modifiers p{
  background-color: #999;
}
#modifiers span{
  background-color: #666;
  display: block;
}
</style>