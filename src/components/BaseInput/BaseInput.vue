<template>
  <div class="input-component">
    <input
      v-if="currentType === 'text'"
      class="input"
      type="text"
      v-bind="$attrs"
      :value="modelValue"
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
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseInput.scss"></style>
