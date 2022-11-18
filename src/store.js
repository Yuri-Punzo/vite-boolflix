import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    api_key: "f960c6dfacd4d59b35ba116a5e61632b",
    api_movie_url: "https://api.themoviedb.org/3/search/movie?",
    api_series_url: "https://api.themoviedb.org/3/search/tv?",
    error: null,
    loading: true,
    searchText: "",
    firstSearch: true,
    results: [],
    callApi: (url) => {
        axios.get(url)
            .then(response => {
                //console.log(response);
                //console.log(response.data.results);
                response.data.results.forEach(object => {
                    store.results.push(object)
                })
                store.loading = false
                console.log(store.results);
            })
            .catch(error => {
                console.error(error.message);
                error = error.message
            })
    }
})