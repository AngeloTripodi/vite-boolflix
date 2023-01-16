<script>
import { store } from './store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMovie() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=80ff357ace3460656dde7da26874f7bd', {
        params: {
          query: '007'
        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.store.movieList = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    },

  },

  created() {
    this.searchMovie();
  },
  components: {
    HeaderComponent,
    MainComponent
  }
}

</script>

<template>
  <HeaderComponent />
  <MainComponent />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>