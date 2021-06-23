<template>
  <div>
    <v-container>
      <v-row>
        <router-view></router-view>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  padding: 5% 0% 0% 5%;
}
@media only screen and (max-width: 739px) {
  .container {
    padding: 15% 0% 0% 10%;
  }
}
</style>
