import axios from "axios";
import {ref, watch} from "@vue/composition-api";

const api_key = "5962b5a668af804fc284b1e0a5ec4b9c"
const url = "https://api.themoviedb.org/3"

const useFetchMovieNow = () => {

    const moviesNow       = ref([])
    const moviePopular    = ref([])
    const moviesUpcoming  = ref([])
    const errorMessage    = ref('')
    const currentPage     = ref(1)

   const getMovies = async (currentPage = 1) => {
       await axios.get(`${url}/movie/now_playing?api_key=${api_key}&language=es-ES&page=${currentPage}`)
           .then(resp => {
               moviesNow.value = [
                   ...moviesNow.value,
                   ...resp.data.results
               ]
           })
           .catch(error => errorMessage.value = error.response.data.message)
   }


   const getMoviesPopular = async (currentPage = 1) => {
       await axios.get(`${url}/movie/popular?api_key=${api_key}&language=es-ES&page=${currentPage}`)
           .then(resp => {
               moviePopular.value = [
                   ...moviePopular.value,
                   ...resp.data.results
               ]
           })
           .catch(error => errorMessage.value = error.response.data.message)
   }


   const getMoviesUpcoming = async (currentPage = 1) => {
       await axios.get(`${url}/movie/upcoming?api_key=${api_key}&language=es-ES&page=${currentPage}`)
           .then(resp => {
               moviesUpcoming.value = [
                   ...moviesUpcoming.value,
                   ...resp.data.results
               ]
           })
           .catch(error => errorMessage.value = error.response.data.message)
   }





    const loadMoreMovieNow = () => getMovies(currentPage.value = currentPage.value + 1)
    const loadMoreMoviePopular = () => getMoviesPopular(currentPage.value = currentPage.value + 1)
    const loadMoreMovieUpcoming = () => getMoviesUpcoming(currentPage.value = currentPage.value + 1)

    return {
        moviesNow,
        moviePopular,
        moviesUpcoming,
        errorMessage,

        loadMoreMovieNow,
        loadMoreMoviePopular,
        loadMoreMovieUpcoming,
        getMovies,
        getMoviesPopular,
        getMoviesUpcoming
    }

}


export default useFetchMovieNow