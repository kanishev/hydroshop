<template>
  <div id="auth" class="auth" :class="{ active: isPopup }">
    <div class="auth__body">
      <div class="container">
        <div class="auth__content">
          <a href="" class="auth__close" @click.prevent="$emit('closePopup')"
            >&times;</a
          >
          <input type="checkbox" id="form-switch" />

          <form class="auth__form" id="login-form" @submit.prevent="login">
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
            <app-button class="auth__btn" type="submit">Login</app-button>
            <label class="auth__label" for="form-switch"
              ><span>Register</span></label
            >
          </form>

          <form id="register-form" @submit.prevent="register">
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
            <app-button class="auth__btn" type="submit">Register</app-button>
            <label class="auth__label" for="form-switch">Sign In Now..</label>
          </form>
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
      const res = await axios.post("/auth/login", {
        email: this.email,
        password: this.password,
      });
      const data = await res.data;

      if (data.user) {
        this.$emit("closePopup");
        this.$router.push("/");
      }
    },
    async register() {
      const res = await axios.post("/auth/register", {
        email: this.registerEmail,
        password: this.registerPassword,
        confirm: this.registerConfirm,
        name: this.username,
      });
      const data = await res.data;

      console.log(data.user);
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
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s ease 0s;
}

.active {
  opacity: 1;
  visibility: visible;
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
}

.auth__label {
  cursor: pointer;
}
#form-switch {
  display: none;
}
#register-form {
  display: none;
}
#form-switch:checked ~ #register-form {
  display: block;
}
#form-switch:checked ~ #login-form {
  display: none;
}
</style>
