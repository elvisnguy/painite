<template>
  <v-select :items="items" label="Outlined style" outlined></v-select>
</template>

<script>
export default {
  data() {
    return {
      items: ["All", "Enable", "Disable"],
      props: ['item']
    };
  },
};
</script>

<style></style>
