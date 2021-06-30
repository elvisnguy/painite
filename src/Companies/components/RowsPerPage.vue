<template>
  <div>
    <v-col class="d-flex align-baseline">
      <span>Row per page:</span>
      <div class="mr-2"></div>
      <v-select
        :items="items"
        label="Outlined style"
        dense
        outlined
        :menu-props="{ top: true, offsetY: true }"
      ></v-select>
    </v-col>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
