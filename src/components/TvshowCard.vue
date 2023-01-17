<script>
import { store } from '../store';

export default {
    props: {
        singleTvshowCard: {
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
    },

}
</script>

<template>
    <div class="col-auto my_card py-3">
        <div class="contentCard">
            <img class="noBg" :src="`https://image.tmdb.org/t/p/${imgSize}${singleTvshowCard.poster_path}`"
                alt="Poster Image">
            <div class="cardContentHover">

                <div>
                    <h2> {{ singleTvshowCard.name }}</h2>
                    <p>
                        {{ singleTvshowCard.original_name }} |
                        <img v-if="flagsList.includes(singleTvshowCard.original_language)"
                            :src="'../public/' + singleTvshowCard.original_language + '.png'"
                            :alt="singleTvshowCard.original_language + ' icon'">
                        <span v-else> {{ 'Language: ' + singleTvshowCard.original_language }} </span>
                    </p>
                </div>

                <div>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="icon in 5"
                        :class="icon <= (voteToStar(singleTvshowCard.vote_average)) ? 'gold' : 'grey'" />
                </div>
                <div class="mTop10">
                    <p>{{ singleTvshowCard.overview }}</p>

                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>