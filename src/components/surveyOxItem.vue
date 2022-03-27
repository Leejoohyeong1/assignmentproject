<template>
  <div class="questionDiv" style="display: flex">
    <p>Q</p>
    <label> {{ item.questionText }}</label>
  </div>
  <div class="answer" v-if="item.questionType == 'checkbox'">
    <input type="radio" value="1" :id="'answerRadio'+index+'Agree'" :name="'answerRadio'+index">
    <label :for="'answerRadio'+index+'Agree'"> O </label>
    <input type="radio" value="2" :id="'answerRadio'+index+'false'" :name="'answerRadio'+index">
    <label :for="'answerRadio'+index+'false'"> X </label>
  </div>
</template>

<script>
export default {
  name: "surveyOxItem"
}
</script>

<style scoped>

</style>