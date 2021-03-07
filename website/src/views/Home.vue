<template>
  <div class="home">
    <div>
      <!-- This accesses the addMore function from composition API using the props -->
      {{ this.numberOne }} + {{ this.numberTwo }} =
      {{ addMore(this.numberOne, this.numberTwo) }}
    </div>
    <div>2 + 6 = {{ added }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import { ref } from "vue";
import { Add } from "../services/apiHelper";

export default defineComponent({
  name: "Home",
  props: {
    numberOne: {
      type: Number,
      required: true
    },
    numberTwo: {
      type: Number,
      required: true
    }
  },
  setup() {
    function addMore(one: number, two: number): number {
      return one + two;
    }

    const added = ref(0);

    return { addMore, added };
  },
  async mounted() {
    // this value is obtained from the GraphQL api
    await Add(2, 6).then((result: any) => (this.added = result.data.add));
  }
});
</script>