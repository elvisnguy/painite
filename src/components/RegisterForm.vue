<template>
  <v-container id="form-container">
    <v-row class="register-row" justify="center">
      <v-col cols="12" sm="12" md="8" lg="8">
        <h1>Register</h1>
        <v-form
          @submit.prevent="onSubmit"
          ref="signUpForm"
          v-model="formValidity"
        >
          <v-text-field
            label="Email"
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
            :disabled="!formValidity"
          >
            <span v-if="!submitLoading">SIGN UP</span
            ><v-progress-circular
              class="circular"
              indeterminate
              color="purple"
              v-if="submitLoading"
            ></v-progress-circular>
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
    userInfor: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    formValidity: false,
    submitLoading: false,
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Please enter a valid email address",
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
      this.submitLoading = true;
    },
    onSubmit() {
      this.$emit("userInfor", this.userInfor);
    },
    // register() {
    //   this.$store
    //     .dispatch("register", {
    //       firstName: this.userInfor.firstName,
    //       lastName: this.userInfor.lastName,
    //       username: this.userInfor.email,
    //       password: this.userInfor.password,
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    //     // .then(() => {
    //     //   this.$router.push({ name: "Home" });
    //     // });
    // },
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
