<template>
  <div class="about">
    <vue_Choose></vue_Choose>
    <vue_Advantages></vue_Advantages>
  </div>
</template>

<script>
// @ is an alias to /src
import vue_Choose from "@/components/v_Choose.vue";
import vue_Advantages from "@/components/v_Advantages.vue";

export default {
  name: "About",
  components: {
    vue_Choose,
    vue_Advantages,
  },

  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>