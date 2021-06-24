<template>
  <v-form @submit.prevent="onSubmit" ref="signUpForm" v-model="formValidity">
    <v-alert v-if="errorMessage && errorMessage != 'null'" type="error">
      {{ errorMessage }}
    </v-alert>
    <v-text-field
      label="Email/User Name"
      type="email"
      v-model="userInfor.email"
      outlined
      dense
      :rules="emailRules"
    />
    <v-text-field
      v-model="userInfor.firstName"
      label="First Name"
      type="name"
      outlined
      dense
      :rules="[rules.required]"
    />
    <v-text-field
      v-model="userInfor.lastName"
      label="Last Name"
      type="name"
      outlined
      dense
      :rules="[rules.required]"
    />
    <v-text-field
      :rules="[rules.required, rules.min, rules.space]"
      v-model="userInfor.password"
      label="Password"
      outlined
      dense
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
    />
    <v-btn
      class="register-btn"
      block
      color="#FFBF3F"
      v-on:click="validateForm"
      type="submit"
      :disabled="errorMessage == ''"
    >
      <span v-if="errorMessage != ''">SIGN UP</span>
      <span v-if="errorMessage == ''">Signup Successfully</span>
    </v-btn>
    <div class="form-footer">
      <p>By clicking here you agree to our <a>Customer Agreement</a></p>
      <router-link to="/auth/signin">Sign in</router-link>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    userInfor: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    formValidity: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      (v) => !/[ ]/.test(v) || "No spaces allowed",
    ],
    rules: {
      required: (value) => !!value || "This field is required.",
      min: (v) => (v && v.length >= 6) || "Min 6 characters",
      space: (v) => !/[ ]/.test(v) || "No spaces allowed",
    },
  }),
  methods: {
    validateForm() {
      this.$refs.signUpForm.validate();
    },
    onSubmit() {
      this.$emit("userInfor", this.userInfor);
    },
  },
  computed: {
    errorMessage() {
      return this.$store.state.registerModule.errorMessage;
    },
  },
};
</script>

<style scoped>
.form-footer {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
