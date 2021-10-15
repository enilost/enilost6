<template>
  <div class="choose">
    <div class="choose__left">
      <div class="choose__left__inner">
        <span>{{ title[SELECT_LANG_GETT] }}</span>
      </div>
    </div>
    <div class="choose__right"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v_Choose",
  components: {},

  props: {},
  data() {
    return {
      title: {
        en: "Why chose us?",
        ru: "Почему выбирают нас?",
      },
    };
  },
  computed: {
    ...mapGetters(["SELECT_LANG_GETT"]),
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>