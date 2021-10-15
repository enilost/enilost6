<template>
  <div class="contact">
    <vue_Contact></vue_Contact>
    <vue_Form></vue_Form>
  </div>
</template>

<script>
// @ is an alias to /src
import vue_Contact from "@/components/v_Contact.vue";
import vue_Form from "@/components/v_Form.vue";

export default {
  name: "Contact",
  components: {
    vue_Contact,
    vue_Form,
  },

  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>