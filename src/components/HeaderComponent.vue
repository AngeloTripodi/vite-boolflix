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
    <header class=" bg-black">
        <div class="container-fluid px-3 py-2">
            <div class="row align-items-center">
                <div class="logoSection col-6">
                    <h1>BOOLFLIX</h1>
                </div>
                <div class="searchSection col-6 justify-content-end d-flex">
                    <input type="text" id="searchbar" placeholder="Cerca il Film / Serie Tv:"
                        v-model="store.searchedText" @keyup.enter="$emit('searchFilter', store.searchedText)">
                    <button @click="$emit('searchFilter', store.searchedText)">Cerca</button>


                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.logoSection h1 {
    color: red;
    margin-bottom: 0px;
}

.searchSection input {
    margin: 0 1rem;
    padding: 0 1rem;
    background-color: white;
    border-radius: 10px;
    border: none;
}

button {
    background-color: white;
    border-radius: 10px;
    border: none;
    padding: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;

}
</style>