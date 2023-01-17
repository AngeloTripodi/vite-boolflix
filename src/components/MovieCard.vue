<script>
import { store } from '../store';

export default {
    props: {
        singleMovieCard: {
            type: Object,
            required: true,
        }
    },

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
    }

}
</script>

<template>
    <div class="col-12 col-sm-4 col-lg-3 my_card">
        <div>
            <img :src="`https://image.tmdb.org/t/p/${imgSize}${singleMovieCard.poster_path}`" alt="Poster Image">
        </div>
        <div>
            <h2> {{ singleMovieCard.title }}</h2>
            <p>{{ singleMovieCard.original_title }}</p>
        </div>
        <div>
            <img v-if="flagsList.includes(singleMovieCard.original_language)"
                :src="'../public/' + singleMovieCard.original_language + '.png'"
                :alt="singleMovieCard.original_language + ' icon'">
            <span v-else> {{ 'Language: ' + singleMovieCard.original_language }} </span>
        </div>
        <div>
            <font-awesome-icon icon="fa-solid fa-star" v-for="icon in 5"
                :class="icon <= (voteToStar(singleMovieCard.vote_average)) ? 'gold' : 'grey'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>