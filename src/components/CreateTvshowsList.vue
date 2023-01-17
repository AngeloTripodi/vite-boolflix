<script>
import { store } from '../store';
import TvshowCard from './TvshowCard.vue';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {

    },
    components: { TvshowCard }
}
</script>

<template>
    <TvshowCard v-for="show in store.showsList" :singleTvshowCard="show" />
</template>

<style lang="scss" scoped>

</style>