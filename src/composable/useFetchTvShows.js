import axios from "axios";
import {ref} from "@vue/composition-api";

const api_key = "5962b5a668af804fc284b1e0a5ec4b9c"
const url = "https://api.themoviedb.org/3"

const useFetchTvShow = () => {

    const tvShowsPopular = ref([])
    const tvShowsOnAir   = ref([])
    const errorMessage   = ref('')
    const currentPage    = ref(1)

    const getPopularTvShows = async (currentPage = 1) => {
        await axios.get(`${url}/tv/popular?api_key=${api_key}&language=es-ES&page=${currentPage}`)
            .then(resp => {
                tvShowsPopular.value = [
                    ...tvShowsPopular.value,
                    ...resp.data.results
                ]
            })
            .catch(error => errorMessage.value = error.response.data.message)
    }

    const getTvShowsUpcoming = async (currentPage = 1) => {
        await axios.get(`${url}/tv/on_the_air?api_key=${api_key}&language=es-ES&page=${currentPage}`)
            .then(resp => {
                tvShowsOnAir.value = [
                    ...tvShowsOnAir.value,
                    ...resp.data.results
                ]
            })
            .catch(error => errorMessage.value = error.response.data.message)
    }






    const loadMoreTvShow = () => getPopularTvShows(currentPage.value = currentPage.value + 1)
    const loadMoreTvShowUpcoming = () => getTvShowsUpcoming(currentPage.value = currentPage.value + 1)

    return {
        tvShowsPopular,
        tvShowsOnAir,
        errorMessage,

        loadMoreTvShow,
        loadMoreTvShowUpcoming,
        getPopularTvShows,
        getTvShowsUpcoming
    }

}


export default useFetchTvShow