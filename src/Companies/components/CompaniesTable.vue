<template>
  <div>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="companies"
      show-select
      class="elevation-1"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CompaniesDataServices from "../../CompaniesDataServices";
export default {
  data() {
    return {
      companies: [],
      headers: [
        { text: "Name", align: "start", value: "name" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Website", value: "website" },
        { text: "Address", value: "address" },
        { text: "Currency", value: "currency" },
        { text: "Image Name", value: "imageName" },
      ],
    };
  },
  methods: {
    getCompanies() {
      CompaniesDataServices.getAll()
        .then((response) => {
          this.companies = response.data.map(this.getDisplayCompanies);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDisplayCompanies(companies) {
      return {
        id: companies.id,
        name: companies.name,
        phoneNumber: companies.phoneNumber,
        website: companies.website,
        address: companies.address,
        currency: companies.currency,
      };
    },
  },
  mounted() {
    this.getCompanies();
  },
};
</script>

<style lang="scss" scoped></style>
