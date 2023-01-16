<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        flags(movieLanguage) {
            if (movieLanguage == 'it') {
                movieLanguage = `${movieLanguage}.png`;
                return movieLanguage;
            }
            else if ((movieLanguage == 'en')) {
                movieLanguage = `${movieLanguage}.png`;
                return movieLanguage;
            }
            else if ((movieLanguage == 'de')) {
                movieLanguage = `${movieLanguage}.png`;
                return movieLanguage;
            }
            else if ((movieLanguage == 'es')) {
                movieLanguage = `${movieLanguage}.png`;
                return movieLanguage;
            }
            else if ((movieLanguage == 'ja')) {
                movieLanguage = `${movieLanguage}.png`;
                return movieLanguage;
            }
            else {
                return 'No flag for ' + movieLanguage + ' :(';
            }

        }
    },

}
</script>

<template>
    <main>
        <h1>Main</h1>
        <div v-for="movie in store.contentList ">
            {{ movie.title }} {{ movie.name }}/ {{ movie.original_title }} {{ movie.original_name }}/ -- <img
                :src="flags(movie.original_language)" :alt="flags(movie.original_language)">
            -- {{ movie.vote_average }}
        </div>


    </main>
</template>

<style lang="scss" scoped>

</style>