<template>
  <v-container id="form-container">
    <v-row class="register-row" justify="center">
      <v-col cols="12" sm="12" md="8" lg="8">
        <h1>Register</h1>
        <v-form
          @submit.prevent="register"
          ref="signUpForm"
          v-model="formValidity"
        >
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            outlined
            dense
            :rules="emailRules"
          />
          <v-text-field
            v-model="firstName"
            label="First Name"
            type="name"
            outlined
            dense
            :rules="[rules.required]"
          />
          <v-text-field
            v-model="lastName"
            label="Last Name"
            type="name"
            outlined
            dense
            :rules="[rules.required]"
          />
          <v-text-field
            :rules="[rules.required]"
            v-model="password"
            label="Password"
            outlined
            dense
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-btn
            block
            color="#FFBF3F"
            @click="validateForm"
            type="submit"
            :disabled="!formValidity"
          >
            SIGN UP
          </v-btn>
          <div class="form-footer">
            <p>By clicking here you agree to our <a>Customer Agreement</a></p>
            <a>Sign in</a>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    formValidity: false,
    showIcon: false,
    emailRules: [
      (value) => value.indexOf("@") !== 0 || "Email should have a username.",
      (value) => value.includes("@") || "Email should include an @ symbol.",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain.",
      (value) => value.includes(".") || "Email should include a period symbol.",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension.",
    ],
    rules: {
      required: (value) => !!value || "The field is required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),
  methods: {
    validateForm() {
      this.$refs.signUpForm.validate();
    },
    register() {
      this.$store
        .dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.email,
          password: this.password,
          phone: this.phone,
        })
        .then(() => {
          this.$router.push({ name: "Home" });
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
.register-row {
  margin-top: 30px;
}
h1 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  color: #4f2566;
}
.form-footer {
  text-align: center;
  margin-top: 30px;
}
</style>
