<template>
  <div class="advantages__item">
    <div class="item__inner">
      <div class="advantages__logo">
        <img
          v-bind:src="require('@/assets/advantages/' + card.img)"
          alt="img"
        />
      </div>
      <div class="advantages__content">
        <div class="advantages__title">{{ card.title[SELECT_LANG_GETT] }}</div>
        <div class="advantages__text">
          {{ card.text[SELECT_LANG_GETT] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v_Advantages_card",
  components: {},

  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
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