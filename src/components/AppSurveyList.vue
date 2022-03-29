<template>
  <div class="scrollframe">
    <div class="scroll">
      <div v-for="(item,index) in surveyList" class="cardView" v-bind:key="item">
        <survey-text-item
            v-if="item.questionType == 'text'"
            v-bind:props-index="index"
            v-bind:props-survey-item="item"
            @handleInput="inputHandler"
        />

        <survey-ox-item
            v-if="item.questionType == 'radio'"
            v-bind:props-index="index"
            v-bind:props-survey-item="item"
            @handleInput="inputHandler"
        />

      </div>
    </div>
  </div>
</template>

<script>
import SurveyTextItem from "@/components/surveyTextItem";
import SurveyOxItem from "@/components/surveyOxItem";

export default {
  name: "AppSurveyList",
  components: {SurveyOxItem, SurveyTextItem },
  props: ["propsSurveyList"],
  data() {
    return {
      surveyList: [],
      requestData: [],
    };
  },
  emits: ["getItem"],
  beforeMount() {
    this.surveyList = [...this.propsSurveyList].map((item) => {
      return {
        question: item.questionText,
        questionType: item.questionType,
        questionNo: item.no,
        item: {
          no: item.no,
          etc: "",
          awnser: (item.questionType == "text" ) ?  99:-1,
        },
      };
    });
  },
  methods: {
    getData: function () {
      return this.surveyList.map(value => value.item);
    },
    inputHandler: function (value,index) {
      const surveyItem = this.surveyList[index];
      if (surveyItem.questionType === "text") {
        surveyItem.item.etc = value;
      }else if (surveyItem.questionType === "radio") {
        surveyItem.item.awnser = value;
      }
    },
  },
};
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
