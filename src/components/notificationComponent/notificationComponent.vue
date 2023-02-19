<template>
  <div class="inner-tooltip-container">
    <div v-if="type === 'error'" class="tooltip__title">error!</div>
    <div v-else class="tooltip__title">success!</div>
    <div class="tooltip__text">{{ text }}</div>
    <button class="tooltip__close" @click="$emit('closeNotification')"></button>
    <base-button class="tooltip__btn" @click="$emit('closeNotification')">
      Close
    </base-button>
  </div>
</template>

<script>
import BaseButton from "../BaseButton";
export default {
  components: {
    BaseButton,
  },
  props: {
    type: {
      type: String,
      default: "success",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped src="./notificationComponent.scss"></style>
