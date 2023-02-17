<template>
  <div class="timer">
    <ul class="timer__point-list">
      <li class="timer__point-item">
        <span>{{ timer.days }}</span>
        <timer-title class="timet__point-title">Days</timer-title>
      </li>
      <li class="timer__point-item">
        <span>{{ timer.hours }}</span>
        <timer-title class="timet__point-title">Hours</timer-title>
      </li>
      <li class="timer__point-item">
        <span>{{ timer.minutes }}</span>
        <timer-title class="timet__point-title">Minutes</timer-title>
      </li>
      <li class="timer__point-item">
        <span>{{ timer.seconds }}</span>
        <timer-title class="timet__point-title">Seconds</timer-title>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTimer } from "vue-timer-hook";
import timerTitle from "../timerTitleComponent";
const time = new Date();

export default {
  components: {
    timerTitle,
  },
  data() {
    return {
      timer: Number,
    };
  },
  mounted() {
    time.setSeconds(time.getSeconds() + 7990908); // 92+ day time
    this.timer = useTimer(time.getTime());
  },
};
</script>

<style lang="scss" scoped src="./heroTimerComponent.scss"></style>
