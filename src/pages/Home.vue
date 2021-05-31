<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- Search -->
        <Search />

        <!-- Buttons -->
        <button v-if="!repos" @click="getRepos" class="btn btnPrimary">Search!</button>
        <button v-else @click="getRepos" class="btn btnPrimary">Search Again!</button>

        <!-- Repository -->
        <Repository />
      </div>
    </section>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Repository from '@/components/Repository.vue'

export default {
  components: { Search, Repository },
  computed: {
    repos () {
      return this.$store.getters.getRepos
    }
  },
  methods: {
    getRepos () {
      let value = this.$store.getters.getSearch
      this.$store.dispatch('setRepos', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    margin-top: 25px;
  }
  .errors {
    margin-top: 25px;
  }
}
</style>