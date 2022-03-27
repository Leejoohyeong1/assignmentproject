<template>
  <div class="launchdisplay" v-on:click="goToSurveyPage">
    할랠루야
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'AppStarting',
  created() {

  },
  methods : {
    goToSurveyPage: ()=>{router.push("./survey")}
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .launchdisplay{
    position: fixed;
    display: block;
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
