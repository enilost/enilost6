<template>
  <div class="send-form">
    <div class="send-form__img"></div>
    <div class="send-form__form">
      <form action="" method="get" @submit.prevent="saveForm">
        <legend>{{ title[SELECT_LANG_GETT] }}</legend>
        <div class="send-form__name">
          <input
            type="text"
            name=""
            id=""
            v-bind:placeholder="placeholderName[SELECT_LANG_GETT]"
            v-model="formObj.name"
          />
        </div>
        <div class="send-form__mail">
          <input
            type="email"
            name=""
            id=""
            v-model="formObj.mail"
            placeholder="E-mail"
          />
        </div>
        <div class="send-form__text">
          <textarea
            name=""
            id=""
            cols="15"
            rows="10"
            v-bind:placeholder="placeholderMessage[SELECT_LANG_GETT]"
            v-model="formObj.msg"
          ></textarea>
        </div>
        <div class="send-form__submit">
          <input type="submit" v-bind:value="sendInputText[SELECT_LANG_GETT]" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v_Form",
  components: {},

  props: {},
  data() {
    return {
      formObj: {
        name: "",
        mail: "",
        msg: "",
      },
      title: {
        en: "Get in touch",
        ru: "Форма для связи",
      },
      placeholderName: {
        en: "Name",
        ru: "Имя",
      },
      placeholderMessage: {
        en: "Your message",
        ru: "Ваше сообщение",
      },
      sendInputText: {
        en: "Send message",
        ru: "Отправить",
      },
    };
  },
  computed: {
    ...mapGetters(["SELECT_LANG_GETT"]),
  },
  methods: {
    saveForm() {
      this.formObj.name = "";
      this.formObj.mail = "";
      this.formObj.msg = "";
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>