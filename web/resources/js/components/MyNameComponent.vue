<template>
  <h1>{{ this.$parent.name }}</h1>
</template>

<style scoped>
  #header h1 {
    font-family: Source Sans Pro, "sans-serif";
    font-weight: bold;
    font-size: 4.25em;
  }
</style>

<script>
  export default {
    mounted: function() {
    },
    methods: {
      hello: function() {
        console.log("My name is "+this.$parent.name);
      },
    }
  }
</script>
