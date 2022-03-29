<template>
  <div class="launchDisplay" v-on:click="goToSurveyPage">
    <div class="mainTitle">{{ mainTitle }}</div>
    <div class="subTitle">{{ subTitle }}</div>
  </div>
</template>

<script>

//import axios from "axios"
import router from "@/router";

export default {
  name: 'AppStarting',

  data:function(){
    return {
      mainTitle : "",
      subTitle : ""
    }
  },

  beforeMount() {
    setTimeout(()=>router.push("./"),3000);
    this.$data.mainTitle = "참여해주셔서 감사합니다"
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.launchDisplay{
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  z-index: 1000;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: beige;
}
</style>
