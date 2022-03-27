<template>
  <header>
    <div class="wrap_header">
      <h3>아하</h3>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data: function(){
    return {
      str: 'AppHeader2'
    }
  }
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