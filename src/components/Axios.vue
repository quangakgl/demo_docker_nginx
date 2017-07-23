<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- Cần sử dụng lệnh v-if để tránh trường hợp biến weather chưa được gán, undefined -->
    <h2 v-if="weather.main">Weather forecast in Hanoi {{ weather.main.temp }} degree with {{ weather.weather[0].main }}</h2>
  </div>
</template>

<script>
  /* eslint-disable no-tabs */

  import axios from 'axios';

  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Demo Axios',
        weather: {},
      };
    },
    // Fetches posts when the component is created.
    created() {
      const self = this;
      axios.get('http://openweathermap.org/data/2.5/weather?id=1561096&appid=b1b15e88fa797225412429c1c50c122a1')
        .then((response) => {
          // JSON responses are automatically parsed.
          self.weather = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
