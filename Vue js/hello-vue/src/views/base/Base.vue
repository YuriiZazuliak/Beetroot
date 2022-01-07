<template>
  <section id="app2">
    <h1>Base section {{ name }}</h1>
    <base1></base1>
    <button v-on:click="upNumber()">{{ numberUse }}</button>
  </section>
</template>
<script>
import Base1 from "./Base1.vue";
export default {
  name: "base",
  components: {
    Base1,
  },
  el: "#app2",
  data: () => ({
    name: "QWERTY",
    version: "2.34.12.3",
    numberUse: 5,
  }),
  computed: {},
  methods: {
    upNumber: function () {
      return this.numberUse++;
    },
  },
};
</script>
<style scoped>
</style>
