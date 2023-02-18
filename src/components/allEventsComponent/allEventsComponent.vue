<template>
  <div class="all-events section">
    <div class="container">
      <div class="section__title all-events__title">all events</div>
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
};
</script>

<style lang="scss" scoped src="./allEventsComponent.scss"></style>
