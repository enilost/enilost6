<template>
  <div class="home">
    <div class="private-catering">
      <div class="private-catering__img"></div>
      <div class="private-catering__card">
        <div class="private-catering__card__inner">
          <div class="private-catering__card__inner__title">
            {{ title[SELECT_LANG_GETT] }}
          </div>
          <div class="private-catering__card__inner__text">
            {{ text[SELECT_LANG_GETT] }}
          </div>
          <div class="private-catering__card__inner__btns">
            <a href="#" class="get-a-quote">{{ BTN_GETT }}</a>
            <a href="#" class="view-menus">{{ MENU_LINK_GETT }}</a>
          </div>
        </div>
      </div>
    </div>
    <vue_Menus></vue_Menus>
    <vue_Choose></vue_Choose>
    <vue_Advantages></vue_Advantages>
    <vue_Contact></vue_Contact>
    <vue_Form></vue_Form>
  </div>
</template>

<script>
// @ is an alias to /src

import vue_Menus from "@/components/v_Menus.vue";
import vue_Choose from "@/components/v_Choose.vue";
import vue_Advantages from "@/components/v_Advantages.vue";
import vue_Contact from "@/components/v_Contact.vue";
import vue_Form from "@/components/v_Form.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    vue_Menus,
    vue_Choose,
    vue_Advantages,
    vue_Contact,
    vue_Form,
  },

  props: {},
  data() {
    return {
      title: {
        en: "Private catering",
        ru: "Частное ресторанное обслуживание",
      },
      text: {
        en: "Treat your guests to a beautifully plated dinner, hand-crafted canapes or a casual BBQ.",
        ru: "Побалуйте своих гостей красиво сервированным ужином, канапе ручной работы или неформальным барбекю.",
      },
    };
  },
  computed: {
    ...mapGetters(["BTN_GETT", "SELECT_LANG_GETT", "MENU_LINK_GETT"]),
  },
  methods: {},
  watch: {},
};
</script>
