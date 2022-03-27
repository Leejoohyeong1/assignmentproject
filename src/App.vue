<template>
  <app-header></app-header>
  <div class="content">
    <router-view>

    </router-view>

  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";


export default {
  components: {
    'app-header': AppHeader,
  }
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
    background: violet;
  }

</style>
