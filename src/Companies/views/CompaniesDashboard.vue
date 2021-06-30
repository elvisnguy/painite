<template>
  <div>
    <v-container>
      <v-row class="align-baseline">
        <CreateButton />
        <ShowCompanies />
        <FilterCompanies />
        <RowsPerPage />
        <SearchCompanies />
      </v-row>
      <v-row>
        <v-col cols="12">
          <CompaniesTable />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CreateButton from "@/Companies/components/CreateButton.vue";
import ShowCompanies from "@/Companies/components/ShowCompanies.vue";
import FilterCompanies from "@/Companies/components/FilterCompanies.vue";
import RowsPerPage from "@/Companies/components/RowsPerPage.vue";
import SearchCompanies from "@/Companies/components/SearchCompanies.vue";
import CompaniesTable from "@/Companies/components/CompaniesTable.vue";
export default {
  components: {
    CreateButton,
    ShowCompanies,
    FilterCompanies,
    RowsPerPage,
    SearchCompanies,
    CompaniesTable,
  },
};
</script>

<style lang="scss" scoped></style>
