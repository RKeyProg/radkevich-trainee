<template>
  <div class="accordion-component">
    <ul class="accordion__menu">
      <li
        v-for="item in accordionList"
        :key="item.id"
        :class="['accordion__item', { active: item.active }]"
      >
        <button class="accordion__btn" @click="changeAcive(item.id)">
          <p>
            {{ item.title }}
          </p>
          <span>{{ item.id }}</span>
        </button>
        <div
          class="accordion__content"
          :style="{
            backgroundImage: `url(${item.bg})`,
          }"
        >
          <div class="accordion__item-side" :data-id="item.id">
            <div class="side__title">{{ item.title }}</div>
            <div class="side__date">{{ item.date }}</div>
            <a href="https://www.google.com/" target="_blank">
              <base-button currentType="square" class="side__btn">
                More information
              </base-button>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from "../BaseButton";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      accordionList: [
        {
          id: "01",
          title: "Hawaiian party",
          date: "13.02.2023",
          active: true,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "02",
          title: "Мafia party",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "03",
          title: "Party",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "04",
          title: "Party on the beach",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "05",
          title: "Home Security",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "06",
          title: "Network Design & Implementation",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "07",
          title: "System Design & Engineering",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
        {
          id: "08",
          title: "Client Care Plans",
          date: "13.02.2023",
          active: false,
          bg: require("../../assets/bg/accordionBg.jpg"),
        },
      ],
    };
  },
  methods: {
    changeAcive(id) {
      this.accordionList.filter((item) => {
        item.active = item.id === id ? true : false;
      });
    },
  },
};
</script>

<style lang="scss" scoped src="./allEventsAccordionComponent.scss"></style>
