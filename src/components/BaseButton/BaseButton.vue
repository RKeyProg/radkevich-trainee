<template>
  <div class="btn-component">
    <button
      v-if="currentType === 'fill'"
      class="btn"
      @click="$emit('handleClick')"
      :disabled="disabled"
    >
      <slot></slot>
      <base-icon
        v-if="arrow === 'right'"
        name="arrow"
        class="btn__arrow"
      ></base-icon>
      <base-icon
        v-else-if="arrow === 'down'"
        name="arrow"
        class="btn__arrow btn__arrow_direction_down"
      ></base-icon>
    </button>
    <button
      v-else-if="currentType === 'transparent'"
      class="btn btn_fill_transparent"
      @click="$emit('handleClick')"
    >
      <slot></slot>
      <base-icon
        v-if="arrow === 'right'"
        name="arrow"
        class="btn__arrow"
      ></base-icon>
      <base-icon
        v-else-if="arrow === 'down'"
        name="arrow"
        class="btn__arrow btn__arrow_direction_down"
      ></base-icon>
    </button>
    <button
      v-else-if="currentType === 'submit'"
      class="btn btn_type_submit"
      @click="$emit('handleClick')"
    >
      <slot></slot>
    </button>
    <button
      v-else-if="currentType === 'square'"
      class="btn btn_type_square"
      @click="$emit('handleClick')"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon";
export default {
  components: {
    BaseIcon,
  },
  props: {
    currentType: {
      type: String,
      default: "fill",
    },
    disabled: Boolean,
    arrow: {
      type: String,
      default: "right",
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseButton.scss"></style>
