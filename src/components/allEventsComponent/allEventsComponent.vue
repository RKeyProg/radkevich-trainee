<template>
  <div class="all-events section">
    <div class="container">
      <transition name="show">
        <div
          class="section__title all-events__title"
          v-if="isTitleShow"
          style="transition-delay: 0.7s"
        >
          all events
        </div>
      </transition>
      <accordion></accordion>
    </div>
  </div>
</template>

<script>
import accordion from "../allEventsAccordionComponent";
export default {
  components: {
    accordion,
  },
  data() {
    return {
      isTitleShow: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.isTitleShow = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped src="./allEventsComponent.scss"></style>
