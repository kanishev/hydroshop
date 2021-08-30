<template>
  <div class="loader">
    <div class="loader__element"></div>
  </div>
</template>

<script>
export default {
  name: "app-loader",
};
</script>

<style>
.loader {
  position: absolute;
  overflow: hidden;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
}

.loader__element {
  height: 4px;
  width: 100%;
  background: white;
}

.loader__element:before {
  content: "";
  display: block;
  background-color: blue;
  height: 4px;
  width: 0;
  animation: getWidth 2s ease-in infinite;
}

@keyframes getWidth {
  100% {
    width: 100%;
  }
}
</style>
