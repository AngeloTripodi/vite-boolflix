<script>
import { store } from '../store';
import MovieCard from './MovieCard.vue';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {

    },
    components: { MovieCard }
}
</script>

<template>
    <MovieCard v-for="movie in store.moviesList" :singleMovieCard="movie" />
</template>

<style lang="scss" scoped>

</style>