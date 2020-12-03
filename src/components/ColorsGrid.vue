<template>
  <fragment>
    <div class="row colors-grid" >
        <div class="col-md-4 col-sm-1" v-for="(color, key) in colors" :key="key" >
          <ColorCard :colorData="color"  />
        </div>
    </div>
    <div>
      <div v-if="!colors.length">
          <h1>Loading...</h1>
        </div>
    <div class="color-paginator">
      <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button :disabled="currentPage <= 1" v-on:click="changePage('prev')" class="page-link" href="#"><font-awesome-icon icon="chevron-left" /></button>
        </li>
        <li class="page-item">
          <button :disabled="currentPage === totalPages" v-on:click="changePage()" class="page-link" href="#"><font-awesome-icon icon="chevron-right" /></button>
        </li>
      </ul>
    </nav>
      </div>
    </div>
  </fragment>

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
      colors: [],
      currentPage: 1,
      totalPages: false
    }
  },
  methods: {
    changePage (direction = 'next') {
      if (direction === 'next') {
        this.currentPage++
      } else {
        this.currentPage--
      }

      this.getAllColors()
    },
    async getAllColors () {
      this.currentPage = this.currentPage < 1 ? 1 : this.currentPage
      const { total_pages: totalPages, data } = await getAllColors({
        page: this.currentPage
      })

      this.totalPages = totalPages
      this.colors = data
    }
  },
  async mounted () {
    this.getAllColors()
  }
}
</script>

<style lang="scss">

.color-paginator {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

.colors-grid {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;

    .col-md-4,
    .col-sm-1{
      margin-bottom: 15px;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
</style>
