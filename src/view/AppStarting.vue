<template>
  <div class="launchDisplay" v-on:click="goToSurveyPage">
    <div class="mainTitle">{{ mainTitle }}</div>
    <div class="subTitle">{{ subTitle }}</div>
  </div>
</template>

<script>
import router from "@/router";
//import axios from "axios"
export default {
  name: 'AppStarting',

  data:function(){
    return {
      mainTitle : "",
      subTitle : ""
    }
  },
  beforeMount() {

    if(this.$route.query.code !== null){
      //통신부분
    /*
    axios.('/test?name=veneas')
        .then(function (response) {
          // 성공한 경우 실행
          console.log(response);
        })
        .catch(function (error) {
          // 에러인 경우 실행
          console.log(error);
        })
        .then(function () {
          // 항상 실행
        });

    */
      this.$root.setSurveyCode(this.$route.query.code);
      this.$root.mainTitleChange("식습관 설문");
      this.$data.mainTitle = "식습관 설문";
      this.$data.subTitle = "당신의 식습관은 어떻게 될까요";

    }
  },
  methods : {
    goToSurveyPage: ()=>{router.push("./survey")}
  }
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
