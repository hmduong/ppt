<script>
export default {
  props: {
    res: Object,
  },
};
</script>

<template>
  <div class="result">
    <ul class="table">
      <li v-for="(item, index) in res" :key="index">
        <p v-if="item.err">{{ item.err }}</p>
        <div class="row" v-else>
          <p>a: {{ item.a }}</p>
          <p>f(a): {{ item.fa }}</p>
          <p>b: {{ item.b }}</p>
          <p>f(b): {{ item.fb }}</p>
          <p>p{{ item.step }}: {{ item.mid }}</p>
          <p>f(p{{ item.step }}): {{ item.fmid }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.row p {
  width: 200px;
  padding: 20px;
  margin: 0;
  font-size: 20px;
  border: 1px solid #000;
}
</style>
