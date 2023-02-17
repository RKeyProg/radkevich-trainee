<template>
  <div class="input-component">
    <input
      v-if="currentType === 'text'"
      class="input"
      type="text"
      v-bind="$attrs"
      :value="currentValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="title"
    />
  </div>
</template>

<script>
export default {
  props: {
    currentType: {
      type: String,
      default: "text",
    },
    currentValue: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseInput.scss"></style>
