<template>
  <div class="scrollframe">
    <div class="scroll">
      <div v-for="(item) in propsSurveyList" class="cardView"  v-bind:key="item">
        <survey-text-item v-bind:props-survey-item="item"></survey-text-item>
      </div>
    </div>
  </div>

</template>

<script>

//import surveyOxItem from "@/components/surveyOxItem";
import SurveyTextItem from "@/components/surveyTextItem";

export default {
  name: "AppSurveyList",
  components: {SurveyTextItem},
  props:['propsSurveyList'],
  data() {
    return {
      surveyList : this.propsSurveyList,
    }
  },

  methods: {

    getData:function (){
      console.log('AppSurveyList getData call');
      console.log(this);
    }
  }
}
</script>

<style scoped>

.scrollframe {
  flex: 1;
  display: block;
  height: auto;
  left: 0;
  top: 0;
  overflow-y: auto;
}

.scroll .cardView {
  padding: 1rem;
  display: block;
  height: auto;
  width: -moz-max-content;
  margin: 10px;
  margin-bottom: 15px;
  box-shadow: 3px 3px black;
  background: antiquewhite;
}

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
