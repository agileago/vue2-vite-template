<template>
  <div>
    <p @click="add()">{{ count }}</p>
    <home-child size="large"></home-child>
  </div>
</template>

<script lang="ts">
import HomeChild from './home-child.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: { HomeChild },
  setup() {
    const count = ref(1)
    return {
      count,
    }
  },
  data() {
    return {}
  },
  methods: {
    add() {
      this.count++
    },
    remove() {
      this.count--
    },
  },
})
</script>

<style lang="scss" scoped></style>
