<template>
  <div class="bg-login-page grid">
    <div class="col-6 col-offset-3 align-self-center">
      <h1 class="text-center mb-4">Login</h1>
      <form>
        <div class="input-field">
          <InputText
            id="username"
            type="text"
            placeholder="Username"
            class="border-round-sm p-inputtext-lg w-full"
          />
        </div>
        <div class="input-field">
          <Password
            id="password"
            class="input-width p-inputtext-lg w-full"
            placeholder="Password"
            toggleMask
          />
        </div>
        <div class="btn">
          <Button
            type="submit"
            class="btn-submit text-center p-button-rounded w-full mt-3"
            label="Submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Login",
  setup() {
    const password = ref();
    return password;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
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

/* .form-width {
  width: 40%;
  margin: 0 auto;
} */
/* .input-field {
  padding: 0 20px;
}
.card {
  background: rgba(255, 255, 255, 0.08);
}

.input-width {
  width: 100%;
}
input {
  width: 100% !important;
  border-radius: 40px !important;
  border: 1px solid black !important;
  background: rgba(255, 255, 255, 0.08) !important;
}
.btn-center {
  text-align: center;
}
.btn-submit {
  background: rgba(214, 204, 225, 1);
  border-radius: 40px;
  padding: 8px 0;
  text-align: center;
  width: 60%;
} */
</style>