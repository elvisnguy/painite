<template>
  <v-container>
    <v-row>
      <p class="fw300 fs15">Employees</p>
    </v-row>

    <v-row>
      <v-col cols="12" md="1">
        <ButtonCreate />
      </v-col>

      <v-col cols="12" md="2" class="d-flex">
        <SelectStatus />
      </v-col>

      <v-col cols="12" md="1">
        <OptionalDisplay />
      </v-col>

      <!-- <v-col cols="12" md="1">
        <SelectFilter />
      </v-col> -->

      <!-- <v-col cols="12" md="1"> Rows per page: </v-col>
      <v-col cols="12" md="1">
        <SelectMaximum />
      </v-col>

      <v-col cols="12" md="2">
        <Search />
      </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <EmployeeList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonCreate from "../components/CreateButton.vue";
// import SelectMaximum from "../components/MaximumItem.vue";
// import Search from "../components/Search.vue";
import OptionalDisplay from "../components/OptionalDisplay.vue";
import SelectStatus from "../components/SearchStatus.vue";
import EmployeeList from "../components/Employees.vue";
export default {
  components: {
    ButtonCreate,
    // SelectMaximum,
    // Search,
    OptionalDisplay,
    SelectStatus,
    EmployeeList,
  },
};
</script>

<style>
.mgl18 {
  margin-left: 18%;
}
.fs15 {
  font-size: 45px;
}
.fw300 {
  font-weight: 400;
}
</style>
