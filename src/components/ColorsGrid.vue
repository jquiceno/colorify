<template>
  <div class="row colors-grid" >
        <div class="col-4" v-for="(color, key) in colors" :key="key" >
          <ColorCard :colorData="color"  />
      </div>
    </div>
</template>

<script>
import { getAllColors } from '../services/colors'
import ColorCard from './ColorCard'

export default {
  components: {
    ColorCard
  },
  data: () => {
    return {
      colors: []
    }
  },
  methods: {
    changeSay () {
      this.say = 'Hello John!'
    }
  },
  async mounted () {
    const { data } = await getAllColors()
    this.colors = data
  }
}
</script>>

<style lang="scss">

.colors-grid {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    .col-4 {
      margin-bottom: 15px;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
</style>
