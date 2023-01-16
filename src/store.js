import { reactive } from 'vue';

export const store = reactive({
    searchedText: '',
    movieList: [],
    flags(movieLanguage) {
        if (movieLanguage == 'it') {
            movieLanguage = './public/it.png';
            return movieLanguage;
        }
        else if ((movieLanguage == 'en')) {
            movieLanguage = './public/en.png';
            return movieLanguage;
        }
        else if ((movieLanguage == 'de')) {
            movieLanguage = './public/de.png';
            return movieLanguage;
        }
        else if ((movieLanguage == 'es')) {
            movieLanguage = './public/es.png';
            return movieLanguage;
        }
        else if ((movieLanguage == 'ja')) {
            movieLanguage = './public/ja.png';
            return movieLanguage;
        }
        else {
            return 'No flag for ' + movieLanguage + ' :(';
        }

    }

});
