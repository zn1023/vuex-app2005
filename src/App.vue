<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["SET_USERROUTES"])
  },
  mounted() {
    // this.SET_USERROUTES();
  }
};
</script>

