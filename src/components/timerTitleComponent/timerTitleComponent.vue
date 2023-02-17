<template>
  <div class="timer-title">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.timer-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  height: 54px;
  background: center/cover no-repeat url("@/assets/bg/timerDecor.svg");
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
}
</style>
