<script>
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      type: {
        1: { id: 1, val: "bisection" },
        2: { id: 2, val: "unk" },
      },
    };
  },
};
</script>

<template>
  <div class="form">
    <span>a = <input type="number" id="aNum" v-model="form.a" /></span>
    <span>b = <input type="number" id="bNum" v-model="form.b" /></span>
    <span class="fx">
      f(x) = <input type="number" id="s3Num" v-model="form.s3" />x<sup>3</sup>
      <input type="number" id="s2Num" v-model="form.s2" />x<sup>2</sup>
      <input type="number" id="s1Num" v-model="form.s1" />x
      <input type="number" id="s0Num" v-model="form.s0" />.
    </span>
    <span> p = <input type="number" id="pNum" v-model="form.p" /> </span>
    <span>
      Algorithm:
      <select name="type" id="type" v-model="form.type">
        <option v-for="el in type" :value="el.val" :key="el.id">
          {{ el.val }}
        </option>
      </select>
    </span>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  font-size: 20px;
}

.form span {
  margin-right: 50px;
}

.form input {
  height: 25px;
  font-size: 20px;
  width: 50px;
}

.fx input {
  margin-left: 20px;
}

.form select {
  height: 25px;
  font-size: 20px;
}
</style>
