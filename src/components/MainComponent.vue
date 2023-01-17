<script>
import CreateMoviesList from './CreateMoviesList.vue';
import CreateTvshowsList from './CreateTvshowsList.vue';

export default {
    data() {
        return {
        }
    },
    methods: {
    },

    components: {
        CreateMoviesList,
        CreateTvshowsList
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <CreateMoviesList />
                <CreateTvshowsList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>