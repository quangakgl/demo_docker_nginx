<template>
  <div>
    <div class="block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <el-switch
      v-model="value2"
      on-text=""
      off-text="">
    </el-switch>
    <el-switch
      v-model="value3"
      on-color="#13ce66"
      off-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: true,
        value3: true,
      };
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
    },
  };
</script>
