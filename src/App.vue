<script>
import { store } from './store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  data() {
    return {
      store,
      newList: '',
    };
  },

  methods: {

    searchContent(searchText) {
      this.searchMovie(searchText);
      this.searchTvShows(searchText);
      // this.getlist()
    },

    // getlist() {
    //   store.contentList = store.moviesList.concat(store.showsList);
    //   console.log(store.contentList)
    // },

    searchMovie(movieName) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=80ff357ace3460656dde7da26874f7bd', {
        params: {
          query: movieName,
        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.store.moviesList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    },


    searchTvShows(showName) {
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=80ff357ace3460656dde7da26874f7bd', {
        params: {
          query: showName,
        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.store.showsList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    },

    getTop() {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=80ff357ace3460656dde7da26874f7bd&page=1', {
        params: {
        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.store.moviesList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },



  created() {
    this.getTop()
  },

  components: {
    HeaderComponent,
    MainComponent
  }
}

</script>

<template>
  <HeaderComponent @searchFilter="searchContent" />
  <MainComponent />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>