<template>
  <v-app>
    <Navbar class="mb-10" />
    <router-view />

    <AppFooter />
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  components: {
    Navbar,
    AppFooter,
  },
};
</script>