<template>
  <App-SurveyList ref="SurveyList"  v-bind:propsSurveyList="listData"></App-SurveyList>
  <div class="btndiv" v-on:click="surveySend"></div>
</template>



<script>
import AppSurveyList from "../components/AppSurveyList"
//import router from "@/router";

export default {
  name: "AppSurvey",
  components : {
    'App-SurveyList' :AppSurveyList,
  },
    data: function() {
    return {
      listData:[],
    }
  },

  created() {
    const a  = [
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
      }
    ]
    this.$data.listData = a;

  },
  methods : {
    surveySend: function (){
      console.log("surveySend");
      this.$refs.SurveyList.getData();

    }
  }
}
</script>

<style scoped>

.btndiv{
  height: 5rem;
  width: 100%;
  background: aqua;
  bottom: 0;
}

</style>