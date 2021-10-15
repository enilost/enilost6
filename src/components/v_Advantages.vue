<template>
  <div class="advantages">
    <div class="wrapper">
      <div class="advantages__inner">
        <vue_Advantages_card
          v-for="card in cards"
          :key="card.name"
          v-bind:card="card"
        ></vue_Advantages_card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vue_Advantages_card from "@/components/Advantages/v_Advantages_card.vue";

export default {
  name: "v_Advantages",
  components: {
    vue_Advantages_card,
  },

  props: {},
  data() {
    return {
      cards: [
        {
          name: "Always fresh",
          title: {
            en: "Always fresh",
            ru: "Всегда свежая",
          },
          text: {
            en: "Fresh, seasonal and simple cuisine. Food is our business and our passion.",
            ru: "Свежая, сезонная и простая кухня. Еда - это наш бизнес и наша страсть.",
          },
          img: "flower.png",
        },
        {
          name: "Reliable and flawless",
          title: {
            en: "Reliable and flawless",
            ru: "Надежность и безупречность",
          },
          text: {
            en: "Successful catering is about organisation, high quality service, and great food.",
            ru: "Успешный кейтеринг - это организация, высокое качество обслуживания и отличная еда.",
          },
          img: "clock.png",
        },
        {
          name: "Clean and healthy",
          title: {
            en: "Clean and healthy",
            ru: "Чистая и здоровая",
          },
          text: {
            en: "We use only the best organic ingredients and gluten and dairy free cooking.",
            ru: "Мы используем только лучшие органические ингредиенты и готовим без глютена и молочных продуктов.",
          },
          img: "leaf.png",
        },
        {
          name: "Fits any size and budget",
          title: {
            en: "Fits any size and budget",
            ru: "Впишемся в любой формат и бюджет",
          },
          text: {
            en: "We are able to serve events from 2 to 2000 guests and always at reasonable prices.",
            ru: "Мы можем обслуживать мероприятия от 2 до 2000 гостей и всегда по разумным ценам.",
          },
          img: "fit.png",
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