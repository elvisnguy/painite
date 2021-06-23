<template>
  <div>
    <AppBar />
    <NavBar />
    <v-container>
      <v-spacer></v-spacer>
    </v-container>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    AppBar,
    NavBar,
  },
};
</script>
