<template>
  <div class="alert" :class="`alert-${type}`">{{ message }}</div>
</template>

<script>
export default {
  props: ["message", "type"],
  name: "app-alert",
  mounted() {
    setTimeout(() => {
      this.$store.commit("clearMessage");
    }, 3000);
  },
};
</script>

<style>
.alert {
  position: absolute;
  right: 20px;
  margin: 10px 0px;
  padding: 12px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 1px;
  z-index: 1;
}

.alert:hover {
  cursor: pointer;
}

.alert-warn {
  color: #9f6000;
  background-color: #feefb3;
  border: 1px solid darken(#feefb3, 15%);
}

.alert-error {
  color: #d8000c;
  background-color: #ffbaba;
  border: 1px solid darken(#ffbaba, 15%);
}

.alert-success {
  color: #4f8a10;
  background-color: #dff2bf;
  border: 1px solid darken(#dff2bf, 15%);
}
</style>
