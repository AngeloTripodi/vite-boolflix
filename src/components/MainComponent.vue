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
        <div class="container-fluid px-5 py-4">
            <div class="row">
                <CreateMoviesList />
                <CreateTvshowsList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #1c1c1c;
    color: white;
}
</style>