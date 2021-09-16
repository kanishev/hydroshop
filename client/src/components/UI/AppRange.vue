<template>
  <li class="aside-filter__item-drop">
    <p class="aside-filter__item-title filter__item-drop active">Цена</p>
    <div class="aside-filter__content filter level-filter level-req active">
      <div id="rangeSlider" class="range-slider">
        <label>Levels:</label>

        <div class="number-group">
          <input
            class="number-input"
            type="number"
            :value="model[0]"
            min="0"
            max="1000000"
          />
          to
          <input
            class="number-input"
            type="number"
            :value="model[1]"
            min="0"
            max="1000000"
          />
        </div>

        <div class="range-group">
          <input
            class="range-input"
            v-model="valueMin"
            @input="
              $emit('input', [
                Number.parseInt(valueMin),
                Number.parseInt(valueMax),
              ])
            "
            min="1"
            max="1000000"
            step="1"
            type="range"
          />
          <input
            class="range-input"
            v-model="valueMax"
            @input="
              $emit('input', [
                Number.parseInt(valueMin),
                Number.parseInt(valueMax),
              ])
            "
            min="1"
            max="1000000"
            step="1"
            type="range"
          />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { rangeStart } from "../../utils/range";

export default {
  props: ["model"],
  mounted() {
    rangeStart();
  },
  data() {
    return {
      valueMin: this.model[0],
      valueMax: this.model[1],
    };
  },
  name: "app-range",
};
</script>

<style >
.range-slider {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.range-slider label {
  color: #2f3035;
  font-size: 15px;
}
.range-slider .number-group {
  flex: 1 0 auto;
  text-align: right;
  height: 30px;
  font-weight: 300;
  font-size: 13px;
  color: #2f3035;
}
.range-slider .number-group .number-input {
  width: 80px;
  height: 30px;
  text-align: center;
  color: #fff;
  background-color: #ccc;
  border: 0;
}
.range-slider .number-group .number-input:first-of-type {
  margin-right: 7px;
}
.range-slider .number-group .number-input:last-of-type {
  margin-left: 7px;
}
.range-slider .number-group .number-input::-webkit-outer-spin-button,
.range-slider .number-group .number-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.range-slider .number-group .number-input:invalid,
.range-slider .number-group .number-input:out-of-range {
  border: 2px solid red;
}
.range-slider .range-group {
  position: relative;
  flex: 0 0 100%;
  height: 47px;
}
.range-slider .range-group .range-input {
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 0;
  -webkit-appearance: none;
  width: 100%;
  border-bottom: 0;
}
.range-slider .range-group .range-input:focus {
  outline: 0;
}
.range-slider .range-group .range-input::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animation: 0.2s;
  background: #1c62cd;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider .range-group .range-input::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #1c62cd;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
}
.range-slider .range-group .range-input::-moz-range-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  animation: 0.2s;
  background: #1c62cd;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider .range-group .range-input::-moz-range-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #1c62cd;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #1c62cd;
  cursor: pointer;
}
.range-slider .range-group .range-input::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animation: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.range-slider .range-group .range-input::-ms-fill-lower,
.range-slider .range-group .range-input::-ms-fill-upper {
  background: #1c62cd;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider .range-group .range-input::-ms-thumb {
  z-index: 2;
  position: relative;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #1c62cd;
  cursor: pointer;
}
</style>
