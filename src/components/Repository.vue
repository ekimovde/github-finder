<template>
  <div class="div__wrappers">
    <!-- Error -->
    <div class="errors" v-if="error">
      <p>{{ error }}</p>
    </div>

    <div class="repos__wrapper" v-if="repos">
      <!-- Title Repository -->
      <h2 class="repos__title">Note Repository</h2>

      <!-- Profile -->
      <div class="profile" v-if="repos">
        <div class="profile__img">
          <img
            :src="repos[0].owner.avatar_url"
            :alt="repos[0].name"
            class="profile__avatar"
          />
          <!-- repo.owner.avatar_url -->
        </div>

        <div class="profile__info">
          <p class="profile__type profile__type-bottom">
            🔫 login - <span>{{ repos[0].owner.login }}</span>
          </p>
          <p class="profile__type">
            🎯 repository - <span>{{ repos.length }}</span>
          </p>
        </div>
      </div>

      <!-- Block sort -->
      <div class="sort-block">
        <div class="sort__name">
          <p @click="sort('name')">Name &#8595;</p>
        </div>

        <div class="sort__star">
          <p @click="sort('stargazers_count')">Star &#8595;</p>
        </div>
      </div>

      <!-- Item -->
      <div class="repos-item" v-for="repo in reposPag" :key="repo.id">
        <div class="repos-info">
          <a class="link" target="_blank" :href="repo.html_url">
            {{ repo.name }}
          </a>
          <span> {{ repo.stargazers_count }} ⭐</span>
        </div>
      </div>

      <!-- Buttons Pagination -->
      <div class="button-list" v-if="viewPagination">
        <div class="btn btnPrimary button-list__left" @click="prevPage">
          &#8592;
        </div>
        <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        current: 1,
        length: 4,
      },
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    repos() {
      return this.$store.getters.getRepos;
    },
    reposPag() {
      return this.repos.filter((row, index) => {
        let start = (this.page.current - 1) * this.page.length;
        let end = this.page.current * this.page.length;
        if (index >= start && index < end) return true;
      });
    },
    viewPagination() {
      if (this.repos.length > this.page.length) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    sort(e) {
      let typeSort = this.$store.getters.getTypeSort;
      if (typeSort.currentSort === e) {
        typeSort.currentSortDir =
          typeSort.currentSortDir === "asc" ? "desc" : "asc";
      }
      typeSort.currentSort = e;
      this.$store.dispatch("setSortRepos", typeSort);
    },
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1;
    },
    nextPage() {
      if (this.page.current * this.page.length < this.repos.length)
        this.page.current += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  .profile__img {
    margin-right: 25px;
    .profile__avatar {
      width: 80px;
      border-radius: 50px;
    }
  }
  .profile__info {
    font-size: 20px;
    .profile__type {
      color: green;
      &.profile__type-bottom {
        margin-bottom: 6px;
      }
      span {
        color: orange;
      }
    }
  }
}
.repos__wrapper {
  width: 600px;
  margin: 30px 0;
  .repos__title {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  .sort-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    p {
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .repos-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #dbdbdb;
  }
  .button-list {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .button-list__left {
      margin-right: 15px;
    }
  }
}
</style>
