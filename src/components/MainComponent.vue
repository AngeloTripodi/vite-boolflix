<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            imgSize: 'w185',
            flagsList: ['de', 'en', 'es', 'it', 'ja'],
        }
    },
    methods: {

        voteToStar(number) {
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
                <img :src="`https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`" alt="Poster Image">
            </div>
            <div>
                <h2> {{ movie.title }}</h2>
                <p>{{ movie.original_title }}</p>
            </div>
            <div>
                <!-- <img :src="flags(movie.original_language)" :alt="flags(movie.original_language)"> -->
                <img v-if="flagsList.includes(movie.original_language)"
                    :src="'../public/' + movie.original_language + '.png'" :alt="movie.original_language + ' icon'">
                <span v-else> {{ 'Language: ' + movie.original_language }} </span>
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-star" v-for="icon in 5"
                    :class="icon <= (voteToStar(movie.vote_average)) ? 'gold' : 'grey'" />
            </div>


        </div>

        <div v-for="show in store.showsList ">

            <div>
                <img :src="`https://image.tmdb.org/t/p/${imgSize}${show.poster_path}`" alt="Poster Image">
            </div>
            <div>
                <h2>{{ show.name }}</h2>
                <p>{{ show.original_name }}</p>
            </div>
            <div>
                <img v-if="flagsList.includes(show.original_language)"
                    :src="'../public/' + show.original_language + '.png'" :alt="show.original_language + ' icon'">
                <span v-else> {{ 'Language: ' + show.original_language }} </span>
            </div>
            <div>
                <font-awesome-icon icon="fa-solid fa-star" v-for="icon in 5"
                    :class="icon <= (voteToStar(show.vote_average)) ? 'gold' : 'grey'" />
            </div>
        </div>






    </main>
</template>

<style lang="scss" scoped>
.gold {
    color: yellow;
}

.grey {
    color: lightgrey;
}
</style>