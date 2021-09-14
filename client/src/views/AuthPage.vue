<template>
  <div id="auth" class="auth">
    <div class="auth__body">
      <div class="container">
        <div class="auth__content">
          <a href="" class="auth__close">&times;</a>

          <app-loader v-if="loader"></app-loader>
          <div class="auth__forms">
            <form class="auth__form" id="login-form" @submit.prevent="login">
              <h2 class="auth__title">Login</h2>
              <input
                class="auth__input"
                type="text"
                placeholder="Email"
                v-model="email"
                name="email"
                required
              />
              <input
                class="auth__input"
                type="password"
                v-model="password"
                placeholder="Password"
                name="password"
                required
              />
              <app-button class="auth__btn" type="submit" :disabled="loader"
                >Login</app-button
              >

              <pre>
ADMIN :
  login: admin@mail.ru
  password: 111

USER:
  login: client@mail.ru
  password: 111
              </pre>
            </form>

            <form id="register-form" @submit.prevent="register">
              <h2 class="auth__title">Registration</h2>
              <input
                class="auth__input"
                type="text"
                placeholder="Username"
                v-model="username"
                name="registerUsername"
                required
              />
              <input
                class="auth__input"
                type="email"
                placeholder="Email"
                v-model="registerEmail"
                name="registerEmail"
                required
              />
              <input
                class="auth__input"
                type="password"
                placeholder="Password"
                v-model="registerPassword"
                name="registerPassword"
                required
              />
              <input
                class="auth__input"
                type="password"
                placeholder="Re Password"
                v-model="registerConfirm"
                name="registerConfirm"
                required
              />
              <app-button class="auth__btn" type="submit" :disabled="loader"
                >Register</app-button
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["isPopup"],
  data() {
    return {
      loader: false,
      email: "",
      password: "",
      username: "",
      registerEmail: "",
      registerPassword: "",
      registerConfirm: "",
    };
  },
  methods: {
    async login() {
      this.loader = true;

      const { data } = await axios.post("/auth/login", {
        email: this.email,
        password: this.password,
      });
      this.$store.commit("setMessage", data.message);
      this.loader = false;

      if (data.user) {
        this.$store.commit("setUser", data.user);
        this.$router.push("/");
      }
    },
    async register() {
      this.loader = true;
      const { data } = await axios.post("/auth/register", {
        email: this.registerEmail,
        password: this.registerPassword,
        confirm: this.registerConfirm,
        name: this.username,
      });
      this.$store.commit("setMessage", data.message);
      this.loader = false;
    },
  },
};
</script>

<style>
.auth {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.auth__forms {
  display: flex;
}

.auth__forms form {
  flex-basis: 50%;
  padding: 10px;
}

.auth__body {
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
}
.auth__content {
  position: relative;
  background-color: #fff;
  color: #000;
  max-width: 800px;
  padding: 30px;
}

.auth__title {
  margin-bottom: 25px;
  text-transform: uppercase;
}

.auth__close {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 20px;
}
.auth__form {
  margin: 0 auto;
  width: 300px;
}
.auth__input {
  margin-bottom: 3px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
}
.auth__btn {
  padding: 10px;
  margin-top: 10px;
}
.auth__label {
  cursor: pointer;
}

pre {
  font-size: 13px;
  line-height: 1.3em;
  font-family: monospace;
}
</style>
