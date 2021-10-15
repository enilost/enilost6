<template>
  <div id="app" :class="{ 'body-overflow': isBurger }">
    <header class="header">
      <div class="wrapper">
        <div class="lang-cart">
          <keep-alive>
            <div class="lang-cart__lang" :class="{ 'lang-fix': isBurger }">
              <button
                @click="SELECT_LANG_ACTION(lang)"
                v-for="lang in LANGUAGES_GETT"
                :key="lang"
                :class="{
                  'active-lang': selectedLang(lang),
                  red: isBurger & selectedLang(lang),
                }"
              >
                {{ lang }}
              </button>
            </div>
          </keep-alive>
          <div class="lang-cart__cart" :class="{ 'cart-fix': isBurger }">
            <a href="#">{{ onlineOrdering[SELECT_LANG_GETT] }}</a>
            <!-- <span>0</span> -->
          </div>
        </div>
        <nav class="nav">
          <div class="nav__left-menu">
            <ul>
              <li class="nav__li">
                <router-link :to="{ name: 'Home' }">{{
                  menu.home[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li">
                <router-link :to="{ name: 'About' }">{{
                  menu.about[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li">
                <router-link :to="{ name: 'Menus' }">{{
                  menu.menus[SELECT_LANG_GETT]
                }}</router-link>
              </li>
            </ul>
          </div>
          <div class="nav__logo">
            <div class="nav__logo__inner" :class="{ 'logo-fix': isBurger }">
              <div class="nav__logo__inner__top">NYC'S</div>
              <div class="nav__logo__inner__mid">
                <img src="img/logo_695.png" alt="logo" />
              </div>
              <div class="nav__logo__inner__bot">Catering</div>
            </div>
          </div>
          <div class="nav__right-menu">
            <ul>
              <li class="nav__li">
                <router-link :to="{ name: 'Gallery' }">{{
                  menu.gallery[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li">
                <router-link :to="{ name: 'Friends' }">{{
                  menu.friends[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li">
                <router-link :to="{ name: 'Contact' }">{{
                  menu.contact[SELECT_LANG_GETT]
                }}</router-link>
              </li>
            </ul>
          </div>
          <div
            class="nav__burger"
            :class="{
              'active-burger': isBurger,
              'not-active-burger': !isBurger,
            }"
            @click="burgerMenu"
          >
            <span class="nav__burger__span"></span>
            <span class="nav__burger__span"></span>
            <span class="nav__burger__span"></span>
          </div>
          <div
            class="nav__burger-menu"
            :class="{ active_nav_burger: isBurger }"
          >
            <ul>
              <li class="nav__li-burger">
                <router-link :to="{ name: 'Home' }">{{
                  menu.home[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li-burger">
                <router-link :to="{ name: 'About' }">{{
                  menu.about[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li-burger">
                <router-link :to="{ name: 'Menus' }">{{
                  menu.menus[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li-burger">
                <router-link :to="{ name: 'Gallery' }">{{
                  menu.gallery[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li-burger">
                <router-link :to="{ name: 'Friends' }">{{
                  menu.friends[SELECT_LANG_GETT]
                }}</router-link>
              </li>
              <li class="nav__li-burger">
                <router-link :to="{ name: 'Contact' }">{{
                  menu.contact[SELECT_LANG_GETT]
                }}</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <transition name="change" mode="in-out">
      <router-view />
    </transition>
    <vue_Footer></vue_Footer>
  </div>
</template>

<script>
import vue_Footer from "@/components/v_Footer.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    vue_Footer,
    // vue_About,
  },

  props: {},
  data() {
    return {
      isBurger: false,
      menu: {
        home: {
          en: "Home",
          ru: "Главная",
        },
        about: {
          en: "About",
          ru: "О нас",
        },
        menus: {
          en: "Menus",
          ru: "Меню",
        },
        gallery: {
          en: "Gallery",
          ru: "Галерея",
        },
        friends: {
          en: "Friends",
          ru: "Партнеры",
        },
        contact: {
          en: "Contact",
          ru: "Контакты",
        },
      },
      onlineOrdering: {
        en: "Online ordering",
        ru: "Онлайн-заказ",
      },
    };
  },
  computed: {
    ...mapGetters(["SELECT_LANG_GETT", "LANGUAGES_GETT"]),
    changeBurger() {
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
          this.isBurger = false;
        }
      });
      return this.isBurger;
    },
  },
  methods: {
    ...mapActions(["SELECT_LANG_ACTION"]),
    selectedLang(lang) {
      return this.SELECT_LANG_GETT == lang;
    },
    burgerMenu() {
      this.isBurger = !this.isBurger;
    },
  },
  watch: {
    isBurger() {
      if (this.isBurger) {
        document.querySelector("body").classList.add("body-overflow");
      }
      if (!this.isBurger) {
        document.querySelector("body").classList.remove("body-overflow");
      }
    },
    "$route.path"() {
      // console.log("Совершён переход по ссылке");
      this.isBurger = false;
    },
  },
  mounted() {
    if (window.innerWidth >= 768) {
      this.isBurger = false;
    }
    this.changeBurger;
  },
};
</script>

<style lang="scss" scoped>
li .router-link-exact-active {
  color: #7c0888;
  font-size: 18px;
}
.nav__li-burger .router-link-exact-active {
  color: #7c0888;
  font-size: 38px;
  transform: scale(5);
}
.lang-cart__lang {
  .active-lang {
    color: #ffffff;
    background-color: #000000;
  }
}
.lang-cart__lang {
  .red {
    color: #00e3ff;
  }
  .red:hover {
    color: #00e3ff;
  }
}
.change-enter-from {
  opacity: 0;
}
.change-enter-active {
  animation: enterActive 0.3s;
  animation-timing-function: linear;
  position: fixed;
  top: 105px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}
.change-enter-to {
  opacity: 1;
}
.change-leave-from {
}
.change-leave-active {
  animation: leaveActive 0.3s;
  animation-timing-function: linear;
  position: fixed;
  top: 105px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  overflow: hidden;
}
.change-leave-to {
}
@keyframes enterActive {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(0.3);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes leaveActive {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
</style>
