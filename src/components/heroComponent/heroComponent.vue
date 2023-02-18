<template>
  <div class="hero section">
    <div class="container">
      <base-icon name="logo" class="hero__logo"></base-icon>
      <div class="hero__content">
        <div class="hero__info">
          <h1 class="hero__title section__title">Under Construction</h1>
          <p class="hero__subtitle">
            We're making lots of improvements and will be back soon
          </p>
        </div>
        <div class="hero__timer">
          <timer></timer>
        </div>
        <div class="hero__any-info">
          <span>Check our event page when you wait:</span>
          <a href="https://www.google.com/" target="_blank">
            <base-button arrow="right" class="hero__btn"
              >Go to the event</base-button
            >
          </a>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <form action="#" class="footer__form">
          <base-input
            title="Enter your Email and get notified"
            class="footer__input"
          ></base-input>
          <base-button currentType="submit" class="footer__submit">
            <base-icon name="arrow" class="footer__arrow"></base-icon>
          </base-button>
        </form>
        <a href="#all-events" v-smooth-scroll>
          <base-button
            class="footer__other-btn"
            currentType="transparent"
            arrow="down"
            @handleClick="scroll"
          >
            Other Events
          </base-button>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon";
import BaseButton from "../BaseButton";
import BaseInput from "../BaseInput";
import timer from "../heroTimerComponent";

export default {
  name: "HeroComponent",
  components: {
    BaseIcon,
    BaseButton,
    BaseInput,
    timer,
  },
  methods: {
    scroll() {},
  },
};
</script>

<style lang="scss" scoped src="./heroComponent.scss"></style>
