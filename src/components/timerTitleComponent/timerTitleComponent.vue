<template>
  <div class="timer-title">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";

.timer-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.33rem;
  height: 3rem;
  background: center/cover no-repeat url("@/assets/bg/timerDecor.svg");
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 0.9rem;

  @include tablets {
    background: center/cover no-repeat url("@/assets/bg/timerDecorSmall.svg");
    width: 6rem;
    height: 3.5rem;
  }
}
</style>
