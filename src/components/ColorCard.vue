<template>
  <div class="color-card" @click="handlerClickColor(colorData)" :style="{ backgroundColor: colorData.color }">
    <span class="color-date" ><font-awesome-icon :icon="['far', 'calendar']" /> {{ colorData.year }}</span>
    <h2 v-if="!copying" class="color-name" >{{ colorData.name }}</h2>
    <h3 v-if="!copying" class="color-code"> {{ colorData.color }} </h3>
    <h3 v-if="copying" class="copy-message"> <font-awesome-icon :icon="['far', 'clipboard']" /> Color copied! </h3>
    <span class="color-pantone" > {{ colorData.pantone_value }}</span>
  </div>
</template>

<script>

import copy from 'copy-to-clipboard'

export default {
  props: {
    colorData: Object
  },
  data () {
    return {
      copying: false
    }
  },
  methods: {
    handlerClickColor (colorData) {
      this.copying = true
      copy(colorData.color)

      this.$emit('onColorCopy', colorData)

      setTimeout(() => {
        this.copying = false
      }, 800)
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

  .color-pantone {
    position: absolute;
    bottom: 0;
    right: 5px;
    font-size: 14px;
  }
}
</style>
