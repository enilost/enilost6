import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: { lang: 'en' },
    languages: ['en', 'ru'],
    btnQuote: {
      en: "Get a quote",
      ru: "Наши цены"
    },
    menuLink: {
      en: "View menus",
      ru: " Меню"
    }
  },
  mutations: {
    SELECT_LANG(state, lang) {
      state.lang.lang = lang;
    }
  },
  actions: {
    SELECT_LANG_ACTION(context, lang) {
      context.commit("SELECT_LANG", lang)
      // console.log(this.state.lang.lang = lang);
    }
  },
  getters: {
    SELECT_LANG_GETT(state) {
      return state.lang.lang;
    },
    LANGUAGES_GETT(state) {
      return state.languages;
    },
    BTN_GETT(state) {
      return state.btnQuote[state.lang.lang];
    },
    MENU_LINK_GETT(state) {
      return state.menuLink[state.lang.lang];
    }
  },
  modules: {},
});
