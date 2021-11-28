<template>
  <div id="app">
    <Header />
    <div class="button2">
      <button @click="redirect">Redirect</button>
      <button @click="back">Go Back</button>
      <button @click="forward">Go Forward</button>
    </div>
    <router-view />
    <FooterNew />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FooterNew from "@/components/FooterNew.vue";
export default {
  name: "App",
  components: {
    Header,
    FooterNew,
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    mounted() {
      this.$store.commit("updateCartFromLocalStorage");
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.button2 {
  display: flex;
  justify-content: center;
  height: 30px;
}
</style>
