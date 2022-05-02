import {ref} from "@vue/composition-api";
import axios from "axios";


const useFetchSearch = () => {

    const data          = ref([])
    const errorMessage  = ref(null)
    const currentPage   = ref(1)
    const api_key       = "5962b5a668af804fc284b1e0a5ec4b9c"
    const url           = "https://api.themoviedb.org/3"



    const getSearchDB = async (_,currentPage = 1) => {
        await axios.get(
            `${url}/search/multi?api_key=${api_key}&language=es-ES&query=${_}&page=${currentPage.value}&include_adult=false`)
            .then(resp => data.value = resp.data.results)
            .catch(error => errorMessage.value = error )
    }


    const loadMore = () => getSearchDB( currentPage.value = currentPage.value + 1)

    return {
        data,
        errorMessage,

        getSearchDB,
        loadMore
    }

}


export default useFetchSearch

