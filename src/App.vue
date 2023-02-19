<template>
  <div class="app-container">
    <hero-component></hero-component>
    <all-events id="all-events"></all-events>
    <transition name="notification">
      <div v-if="isTooltipShown" class="notify-container">
        <div class="notification">
          <notification
            :text="tooltipText"
            :type="tooltipType"
            @closeNotification="hideTooltip"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import heroComponent from "./components/heroComponent";
import allEvents from "./components/allEventsComponent";
import notification from "./components/notificationComponent";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    heroComponent,
    allEvents,
    notification,
  },
  methods: {
    ...mapActions({
      hideTooltip: "tooltips/hide",
    }),
  },
  computed: {
    ...mapState("tooltips", {
      isTooltipShown: (state) => state.isShown,
      tooltipText: (state) => state.text,
      tooltipType: (state) => state.type,
    }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "../node_modules/normalize.css/normalize.css";

@font-face {
  font-family: "SF Pro Display";
  src: url("./fonts/SFProDisplay-Regular.woff2") format("woff2"),
    url("./fonts/SFProDisplay-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./fonts/SFProDisplay-Medium.woff2") format("woff2"),
    url("./fonts/SFProDisplay-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./fonts/SFProDisplay-Semibold.woff2") format("woff2"),
    url("./fonts/SFProDisplay-Semibold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}
</style>

<style lang="scss" src="./App.scss"></style>
