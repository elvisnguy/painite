<template>
  <v-main id="register-page">
    <v-container id="form-container">
      <v-row class="register-row" justify="center">
        <v-col cols="12" sm="12" md="8" lg="8">
          <h1>Register</h1>
          <register-form @userInfor="register"></register-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
  components: { RegisterForm },
  data: () => ({}),
  methods: {
    register(value) {
      this.$store.dispatch("registerModule/register", {
        firstName: value.firstName,
        lastName: value.lastName,
        username: value.email,
        password: value.password,
      });
    },
  },
};
</script>

<style scoped>
#form-container {
  width: 850px;
  height: 668px;
  background: #ffffff;
  border-radius: 16px;
}
#register-page {
  background: #4f2566;
  height: 100%;
  align-items: center;
  display: flex;
}
.register-row {
  margin-top: 30px;
}
h1 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  color: #4f2566;
}
</style>
