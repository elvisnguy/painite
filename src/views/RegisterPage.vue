<template>
  <div>
    <register-form @userInfor="register"></register-form>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
export default {
  components: { RegisterForm },
  data: () => ({}),
  methods: {
    register(value) {
      this.$store.dispatch("register", {
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
div {
  background-color: green;
}
</style>
