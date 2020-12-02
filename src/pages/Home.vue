<template>
  <div class="main-container container-fluid">
    <header class="page-header">
      <h1>Colorify</h1>
    </header>
    <ColorsGrid />
    <footer class="footer">
      <div class="color-paginator">
        <button>Prev</button>
        <button>Next</button>
      </div>
    </footer>
  </div>
</template>

<script>
import ColorsGrid from '../components/ColorsGrid'

export default {
  components: {
    ColorsGrid
  },
  data: () => {
    return {
      say: 'Hello World!'
    }
  },
  methods: {
    changeSay () {
      this.say = 'Hello John!'
    }
  },
  mounted () {
    setTimeout(() => {
      this.changeSay()
    }, 5000)
  }
}
</script>

<style lang="scss">

.footer {
  padding: 15px;

  .color-paginator {
    display: flex;
    justify-content: space-between;
  }
}

.page-header {
  text-align: center;
  padding: 15px;

  h1 {
    font-size: 30px;
  }
}

.main-container {
  header {
    text-align: center;
  }

  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
}
</style>
