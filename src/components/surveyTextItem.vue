<template>

  <div class="questionDiv" style="display: flex">
    <p>Q</p>
    <label> {{ question }}</label>
  </div>
  <div class="answer">
    <input type="text" v-model="itme.etc" >
  </div>
</template>

<script>
export default {
  name: "surveyTextItem",
  props: ['propsSurveyItem'],
  data: function (){
    return {
      question:this.propsSurveyItem.questionText,
      itme:{
        no : this.propsSurveyItem.no,
        etc : "",
        awnser : 99
      }
    }
  },
  methods : {
    getItem: function (){
      return this.itme;
    }
  }
}
</script>

<style scoped>

.cardView p {
  display: inline;
}

.cardView label {
  padding-left: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  width: -moz-max-content;
}

.cardView .answer {
  padding: 0.5rem 0;
}

.cardView .answer input[type="text"] {
  display: block;
  font-size: 1.2rem;
  padding: 0 1.2rem;
  min-height: 2.1rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  transition: all, 2s;
}
</style>