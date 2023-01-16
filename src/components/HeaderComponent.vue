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
    <header>
        <div class="container">
            <div class="row">
                <div class=" col-6">
                    <h1>Netflix</h1>
                </div>
                <div class="col-6">
                    <label for="searchbar">
                        Cerca il Film / Serie Tv:
                    </label>
                    <input type="text" id="searchbar" v-model="store.searchedText"
                        @keyup.enter="$emit('searchFilter', store.searchedText)">
                    <button @click="$emit('searchFilter', store.searchedText)">Cerca</button>


                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
input {
    margin-left: 1rem;
}
</style>