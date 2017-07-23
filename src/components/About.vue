<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <task>Go to store</task>
      <task>Sing a song</task>
      <task>Do something stupid</task>
    </ul>

  </div>
</template>

<script>
  import Task from '@/components/task'; //  Import mot custom component

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Chú ý task component trong thẻ ul',
      };
    },
    components: { Task },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
