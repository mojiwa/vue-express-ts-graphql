<template>
  <div class="p-2">
      <div v-for="item in list" :key="item">
          <div>{{ item }}</div>
      </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { GetList } from "../services/apiHelper";
export default defineComponent({
    name: "List",
    setup() {
        const list = ref([]);

        return { list };
    },
    async mounted() {
        const list = await GetList();
        this.list = list.data.getList;
    },
});

</script>

<style>

</style>