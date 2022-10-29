<script lang="ts">
import { defineComponent, type PropType } from 'vue'

const HomeChild = defineComponent({
  name: 'HomeChild',
  props: {
    size: {
      type: String as PropType<'small' | 'large'>,
      required: true,
    },
    age: Number,
  },
})
export default HomeChild
</script>

<template>
  <div>1111</div>
</template>

<style lang="scss" scoped></style>
