<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },

}
</script>

<template>
    <main>
        <h1>Main</h1>
        <div v-for="movie in store.movieList ">{{ movie.title }} / {{ movie.original_title }} / {{
            movie.original_language
        }} -- {{ movie.vote_average }}</div>
    </main>
</template>

<style lang="scss" scoped>

</style>