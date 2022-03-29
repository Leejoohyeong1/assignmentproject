<template>
  <div class="questionDiv" style="display: flex">
    <p>Q</p>
    <label>{{ propsSurveyItem.question }}</label>

  </div>
  <div class="answer">
    <div class="answerWrap" >
      <input
          type="radio"
          value="1"
          :id="'answerRadio'+propsSurveyItem.questionNo+'Agree'"
          :name="'answerRadio'+propsSurveyItem.questionNo"
          @blur="$emit('handleInput', $event.target.value,propsIndex)"
      >
      <label :for="'answerRadio'+propsSurveyItem.questionNo+'Agree'"> O </label>
    </div>
    <div class="answerWrap" >
      <input
          type="radio"
          value="2"
          :id="'answerRadio'+propsSurveyItem.questionNo+'False'"
          :name="'answerRadio'+propsSurveyItem.questionNo"
          @blur="$emit('handleInput', $event.target.value,propsIndex)">
      <label :for="'answerRadio'+propsSurveyItem.questionNo+'False'"> X </label>
   </div>
  </div>
</template>

<script>
export default {
  name: "surveyOxItem",
  props: ["propsSurveyItem","propsIndex"],
}
</script>


<style scoped>
.cardView p {
  display: inline;
}

.answerWrap{
  display: flex;
}

.cardView label {
  padding-left: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  width: -moz-max-content;
}

.answer {
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-around;
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