<template>
  <header>
    <div class="wrap_header">
      <h3>{{ propsMainTitle }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['propsMainTitle'],
}
</script>

<style scoped>
  header {
    height: 3.5em;
  }

  .wrap_header {
    z-index: 4;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 3.5rem;
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  header h3 {
    text-align: center;
  }



</style>