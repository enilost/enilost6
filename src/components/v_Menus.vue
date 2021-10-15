<template>
  <div class="product-list">
    <div class="wrapper">
      <div class="product-list__inner">
        <vue_Menus_card
          v-for="card in cards"
          :key="card.name"
          v-bind:card="card"
        >
        </vue_Menus_card>
      </div>
    </div>
  </div>
</template>

<script>
import vue_Menus_card from "@/components/Menus/v_Menus_card.vue";

export default {
  name: "v_Menus",
  components: {
    vue_Menus_card,
  },

  props: {},
  data() {
    return {
      cards: [
        {
          name: "Corporite_catering",
          title: {
            en: "Corporate catering",
            ru: "Бизнес-ланчи",
          },
          text: {
            en: "We are able to serve events from 2 to 2000 guests and always reasonable prices.",
            ru: "Мы можем обслуживать мероприятия от 2 до 2000 гостей и всегда по разумным ценам.",
          },
          img: "Corporite_catering.png",
        },
        {
          name: "Private_catering",
          title: {
            en: "Private catering",
            ru: "Частный сервис",
          },
          text: {
            en: "Fresh, seasonal and simple cuisine. Food is our business and our passion.",
            ru: "Свежая, сезонная и простая кухня. Еда - это наш бизнес и наша страсть.",
          },
          img: "Private_catering.png",
        },
        {
          name: "Weddind_catering",
          title: {
            en: "Weddind catering",
            ru: "Свадебные банкеты",
          },
          text: {
            en: "We use only the best organic ingredients and gluten and dairy free cooking.",
            ru: "Мы используем только лучшие органические ингредиенты и готовим без глютена и молочных продуктов.",
          },
          img: "Weddind_catering.png",
        },
        {
          name: "Online_ordering",
          title: {
            en: "Online ordering",
            ru: "Онлайн заказ",
          },
          text: {
            en: "Successful catering is about organisation, high quality service, and great food.",
            ru: "Успешный кейтеринг - это организация, высокое качество обслуживания и отличная еда.",
          },
          img: "Online_ordering.png",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>


<style lang="scss" scoped>
</style>
