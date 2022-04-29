import axios from "axios";
import {ref} from "@vue/composition-api";

const api_key = "5962b5a668af804fc284b1e0a5ec4b9c"
const url = "https://api.themoviedb.org/3"

const useFetchMovieNow = (page = 1) => {

    const moviesNow    = ref([])
    const errorMessage = ref('')

    axios.get(`${url}/movie/now_playing?api_key=${api_key}&language=es-ES&page=${page}`)
        .then(resp => moviesNow.value = resp.data)
        .catch(error => errorMessage.value = error.response.data.message)


    return {
        moviesNow,
        errorMessage
    }

}


export default useFetchMovieNow