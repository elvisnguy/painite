<template>
  <div>
    <v-col>
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
