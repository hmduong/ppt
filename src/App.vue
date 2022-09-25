<script>
import bisection from "./js/bisection";
import Form from "./components/form.vue";
import Result from "./components/result.vue";

export default {
  data() {
    return {
      form: {
        a: 0,
        b: 0,
        s3: 0,
        s2: 0,
        s1: 0,
        s0: 0,
        p: 3,
        type: "bisection",
        result: [],
      },
    };
  },
  components: {
    Form,
    Result,
  },
  methods: {
    submit() {
      switch (this.form.type) {
        case "bisection":
          this.form.result.splice(0);
          bisection(this.form, this.form.a, this.form.b);
          break;
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>Tính gần đúng</h1>
    <div style="display: flex">
      <Form :form="form"></Form>
      <button @click="submit">Submit</button>
    </div>
    <Result :res="form.result"></Result>
  </div>
</template>

<style>
li {
  list-style: none;
}

button {
  margin: 0 10px;
  padding: 10px;
  font-size: 20px;
}
</style>
