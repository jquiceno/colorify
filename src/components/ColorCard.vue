<template>
  <div class="color-card" :style="{ backgroundColor: colorData.color }">
    <span class="color-date" >{{ colorData.year }}</span>
      <h2 class="color-name" >{{ colorData.name }}</h2>
      <h3 class="color-code"> {{ colorData.color }} </h3>
    <span class="color-any" >{{ colorData.pantone_value }}</span>
  </div>
</template>

<script>

export default {
  props: {
    colorData: Object
  },
  methods: {
    changeSay () {
      this.say = 'Hello John!'
    }
  }
}
</script>

<style lang="scss">

.color-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: relative;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(201, 201, 201);
  cursor: pointer;
  transition-property: all;
  transition-property: transform;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.03);
  }

  .color-name {
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }

  .color-code {
    font-size: 20px;
    margin: 0;
  }

  .color-date {
    position: absolute;
    top: 0;
    font-size: 14px;
  }

  .color-any {
    position: absolute;
    bottom: 0;
    right: 5px;
    font-size: 14px;
  }
}
</style>
