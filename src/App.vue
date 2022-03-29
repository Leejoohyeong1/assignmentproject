<template>
  <AppHeader v-bind:props-main-title="mainTitle"/>
  <div class="content">
    <router-view>

    </router-view>

  </div>
</template>

<script>
//import AppHeader from "./components/AppHeader.vue";


import AppHeader from "@/components/AppHeader";
export default {
  data:function (){
    return {
      mainTitle:"설문",
      surveyCode:"1"
    }
  },
  methods:{
    mainTitleChange: function (title) {
      this.$data.mainTitle = title;
    },
    setSurveyCode: function (code){
      this.$data.surveyCode = code
    }

  },
  components: {AppHeader},
}
</script>

<style>
  html, body *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: calc(100vh - 4.5rem);
    width: 100%;

  }

</style>
