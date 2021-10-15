<template>
  <div class="product-list__inner__card card">
    <div class="product-list__inner__card__img card__img">
      <img v-bind:src="require('@/assets/' + card.img)" alt="" />
    </div>
    <div class="product-list__inner__card__title card__title">
      {{ card.title[SELECT_LANG_GETT] }}
    </div>
    <div class="product-list__inner__card__text card__text">
      {{ card.text[SELECT_LANG_GETT] }}
    </div>
    <div class="product-list__inner__card__btn card__btn">
      <a href="#"
        ><span>{{ BTN_GETT }}</span></a
      >
    </div>
    <div class="product-list__inner__card__link card__link">
      <a href="#">{{ MENU_LINK_GETT }}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v_Menus_card",
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
    ...mapGetters(["SELECT_LANG_GETT", "BTN_GETT", "MENU_LINK_GETT"]),
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>