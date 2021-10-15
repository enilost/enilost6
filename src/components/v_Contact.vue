<template>
  <div class="contacts">
    <div class="wrapper">
      <div class="contacts__title">{{ title[SELECT_LANG_GETT] }}</div>
      <div class="contacts__content">
        <div class="contacts__inner">
          <div class="contacts__item">
            <div class="contacts__item__inner">
              <div class="contacts__item__inner__img">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="contacts__item__inner__text">
                45-35 #B 39th St, Sunnyside, NY 11104
              </div>
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__item__inner">
              <div class="contacts__item__inner__img">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="contacts__item__inner__text">
                contact@primeone.com
              </div>
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__item__inner">
              <div class="contacts__item__inner__img">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="contacts__item__inner__text">(718) 777-7777</div>
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__link">
              <div class="contacts__f">
                <a href="#"
                  ><i class="fa fa-facebook-square" aria-hidden="true"></i
                ></a>
              </div>
              <div class="contacts__t">
                <a href="#"
                  ><i class="fa fa-twitter-square" aria-hidden="true"></i
                ></a>
              </div>
              <div class="contacts__i">
                <a href="#"
                  ><i class="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </div>
              <div class="contacts__g">
                <a href="#"
                  ><i class="fa fa-google-plus-square" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v_Contact",
  components: {},

  props: {},
  data() {
    return {
      title: {
        en: "Say hello",
        ru: "Передать привет",
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