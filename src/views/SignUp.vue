<template>
  <div class="bg-login-page grid">
    <div class="col-6 col-offset-3 align-self-center">
      <h1 class="text-center mb-4">Sign Up</h1>
      <form @submit="onSubmit">
        <div class="input-field">
          <InputText
            id="username"
            type="text"
            placeholder="Username"
            class="border-round-sm p-inputtext-lg w-full"
            v-model="username"
          />
        </div>
        <div class="input-field">
          <Password
            id="password"
            class="input-width p-inputtext-lg w-full"
            placeholder="Password"
            toggleMask
            v-model="password"
          />
        </div>
        <div class="input-field">
          <InputText
            id="email"
            type="email"
            placeholder="Email"
            class="border-round-sm p-inputtext-lg w-full"
            v-model="email"
          />
        </div>
        <div class="btn">
          <Button
            type="submit"
            class="btn-submit text-center p-button-rounded w-full mt-3"
            label="Register"
            @click="onSubmit"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      e.preventDefault();
      const newUser = {
        username: this.username,
        password: this.password,
        email: this.email,
      };
      console.log(newUser);
      this.addUser(newUser);
    },
  },
};
</script>

<style>
.bg-login-page {
  background-image: url("../assets/images/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  height: 100vh;
}
input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08) !important;
}

.input-field {
  margin: 15px 0;
}

.btn-submit {
  background: rgba(214, 204, 225, 1) !important;

  padding: 8px 0;
}
</style>