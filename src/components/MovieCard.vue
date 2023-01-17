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
            imgSize: 'w342',
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
    <div class="col-auto my_card py-3">
        <div class="contentCard">
            <img class="noBg" :src="`https://image.tmdb.org/t/p/${imgSize}${singleMovieCard.poster_path}`"
                alt="Poster Image">
            <div class="cardContentHover">

                <div>
                    <h2> {{ singleMovieCard.title }}</h2>
                    <p>
                        {{ singleMovieCard.original_title }} |
                        <img v-if="flagsList.includes(singleMovieCard.original_language)"
                            :src="'../public/' + singleMovieCard.original_language + '.png'"
                            :alt="singleMovieCard.original_language + ' icon'">
                        <span v-else> {{ 'Language: ' + singleMovieCard.original_language }} </span>
                    </p>
                </div>

                <div>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="icon in 5"
                        :class="icon <= (voteToStar(singleMovieCard.vote_average)) ? 'gold' : 'grey'" />
                </div>
                <div class="mTop10">
                    <p>{{ singleMovieCard.overview }}</p>

                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>