<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            imgSize: 'w185'
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

        },

        integerVote(number) {
            let intNum = number / 2;
            let roundNum = Math.ceil(intNum);
            return roundNum;

        }
    },

}
</script>

<template>
    <main>
        <div v-for="movie in store.moviesList ">

            <div>
                <img :src="`https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`" alt="">
            </div>
            <div>
                <h2> {{ movie.title }}</h2>
                <p>{{ movie.original_title }}</p>
            </div>
            <div>
                <img :src="flags(movie.original_language)" :alt="flags(movie.original_language)">
            </div>
            <div>
                <p> {{ integerVote(movie.vote_average) }}</p>
            </div>


        </div>

        <div v-for="show in store.showsList ">

            <div>
                <img :src="`https://image.tmdb.org/t/p/${imgSize}${show.poster_path}`" alt="">
            </div>
            <div>
                <h2>{{ show.name }}</h2>
                <p>{{ show.original_name }}</p>
            </div>
            <div>
                <img :src="flags(show.original_language)" :alt="flags(show.original_language)">
            </div>
            <div>
                <p> {{ integerVote(show.vote_average) }}</p>
            </div>


        </div>



    </main>
</template>

<style lang="scss" scoped>

</style>