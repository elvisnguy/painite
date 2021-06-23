<template>
  <!-- <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" x-large>
        <v-icon color="orange darken-2"> mdi-cog </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="optional.status" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Status</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="optional.name" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Name</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="optional.email" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Email</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="optional.phone" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Phone</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="optional.number" color="purple"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Number</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="menu = false"> Cancel </v-btn>
        <v-btn color="primary" text @click="menu = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu> -->
  <v-select
    v-model="selectedHeaders"
    :items="headers"
    label="Select Columns"
    multiple
    outlined
    return-object
  >
    <template v-slot:selection="{ item, index }">
      <v-chip v-if="index < 2">
        <span>{{ item.text }}</span>
      </v-chip>
      <span v-if="index === 2" class="grey--text caption"
        >(+{{ selectedHeaders.length - 2 }} others)</span
      >
    </template>
  </v-select>
</template>

<script>
export default {
  computed: {
    optional() {
      return this.$store.state.optionalDisplay;
    },
    headers() {
      return this.$store.state.headers;
    },
  },
};
</script>

<style></style>
