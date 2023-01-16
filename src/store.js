import { reactive } from 'vue';

export const store = reactive({
    searchedText: '',
    moviesList: [],
    showsList: [],
    contentList: [],
});
