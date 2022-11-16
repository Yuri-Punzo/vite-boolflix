import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    api_key: "f960c6dfacd4d59b35ba116a5e61632b",
    api_url: "https://api.themoviedb.org/3/search/movie?api_key=f960c6dfacd4d59b35ba116a5e61632b&query=",
    error: null,
    loading: true,
    searchText: "",
    results: null,
    callApi: (url) => {
        axios.get(url)
            .then(response => {
                //console.log(response);
                console.log(response.data.results);
                store.results = response.data.results
                store.loading = false
            })
            .catch(error => {
                console.error(error.message);
                error = error.message
            })
    }
})