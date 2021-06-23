<template>
  <v-card>
    <v-card-title>
      <div>
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

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          hide-details
        ></v-text-field>
      </div>
    </v-card-title>
    <v-data-table
      :headers="showHeaders"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
      :search="search"
      item-key="name"
      show-select
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [],
    headersMap: [
      {
        text: "STATUS",
        align: "start",
        sortable: false,
        value: "status",
      },
      { text: "NAME", value: "name" },
      { text: "EMAIL", value: "email" },
      { text: "PHONE", value: "phone" },
      { text: "NUMBER", value: "number" },
      { text: "OPTIONS", value: "actions", sortable: false },
    ],
    desserts: [],
    selectedHeaders: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.headers = Object.values(this.headersMap);
    this.selectedHeaders = this.headers;
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          status: 1,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 4.0,
        },
        {
          name: "Ice cream sandwich",
          status: 0,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 4.3,
        },
        {
          name: "Eclair",
          status: 0,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 6.0,
        },
        {
          name: "Cupcake",
          status: 1,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 4.3,
        },
        {
          name: "Gingerbread",
          status: 1,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 3.9,
        },
        {
          name: "Jelly bean",
          status: 0,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 0.0,
        },
        {
          name: "Lollipop",
          status: 0,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 0,
        },
        {
          name: "Honeycomb",
          status: 1,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 6.5,
        },
        {
          name: "Donut",
          status: 1,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 4.9,
        },
        {
          name: "KitKat",
          status: 1,
          email: "nguyenvinhduyet@gmail.com",
          phone: "0961831907",
          number: 7,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style></style>
