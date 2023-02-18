<template>
  <div class="timer">
    <ul class="timer__point-list">
      <li class="timer__point-item">
        <span>{{ timer.days }}</span>
        <timer-title v-if="!isTablet" class="timet__point-title">
          Days
        </timer-title>
        <timer-title v-else class="timet__point-title">DD</timer-title>
      </li>
      <li class="timer__point-item">
        <span>{{ timer.hours }}</span>
        <timer-title v-if="!isTablet" class="timet__point-title">
          Hours
        </timer-title>
        <timer-title v-else class="timet__point-title">HH</timer-title>
      </li>
      <li class="timer__point-item">
        <span>{{ timer.minutes }}</span>
        <timer-title v-if="!isTablet" class="timet__point-title">
          Minutes
        </timer-title>
        <timer-title v-else class="timet__point-title">MM</timer-title>
      </li>
      <li class="timer__point-item">
        <span>{{ timer.seconds }}</span>
        <timer-title v-if="!isTablet" class="timet__point-title">
          Seconds
        </timer-title>
        <timer-title v-else class="timet__point-title">SS</timer-title>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTimer } from "vue-timer-hook";
import timerTitle from "../timerTitleComponent";
const time = new Date("2023-05-31");

export default {
  components: {
    timerTitle,
  },
  data() {
    return {
      timer: Number,
      isTablet: false,
    };
  },
  mounted() {
    time.setSeconds(time.getSeconds()); // 92+ day time
    this.timer = useTimer(time.getTime());

    if (window.screen.width <= 768) {
      this.isTablet = true;
    }
  },
};
</script>

<style lang="scss" scoped src="./heroTimerComponent.scss"></style>
