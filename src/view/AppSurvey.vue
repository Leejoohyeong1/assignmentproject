<template>
  <App-SurveyList ref="SurveyList"  v-bind:propsSurveyList="listData"></App-SurveyList>
  <div class="btnDiv">
    <button class="submitBtn" v-on:click="surveySend">
      설문 완료
    </button>

  </div>
</template>



<script>
import AppSurveyList from "../components/AppSurveyList"
import router from "@/router";

export default {
  name: "AppSurvey",
  components : {
    'App-SurveyList' :AppSurveyList,
  },
    beforeMount() {
    const responseData  = [
      {
        no:1,
        questionText : "질문11이당질문이당질문이당질문이당질문이당질문이당질문이당질문이당질문이당질",
        questionType : "text"
      },
      {
        no:2,
        questionText : "질문2이당질문이당질문이당질문이당질문이당질문이당질문이당질문이당질문이당질",
        questionType : "text"
      },
      {
        no:3,
        questionText : "질3문이당질문이당질문이당질문이당질문이당질문이당질문이당질",
        questionType : "text"
      },
      {
        no:4,
        questionText : "질4문이당질문이당질문이당질문이당질문이당질문이당질문이당질",
        questionType : "radio"
      }
    ]
    this.$data.listData = responseData;

  },


  data: function() {
    return {
      listData:[],
    }
  },
  methods : {
    surveySend: function (){
      const request = this.$refs.SurveyList.getData();
      console.log(request);
      //통신 후 정상 응답이 온다면 페이지 이동합니다.
      router.push("./close");
    }
  }
}
</script>

<style scoped>

.btnDiv{
  height: 4rem;
  width: 100%;
  bottom: 0;
}

.submitBtn {
  background: #ff4800;
  color: white;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  border: none;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
}

</style>