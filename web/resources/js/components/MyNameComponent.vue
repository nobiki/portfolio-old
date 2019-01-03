<template>
  <h1>{{ this.$parent.name }}</h1>
</template>

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
