import  axios  from "axios";

const baseUrl = "https://671c56602c842d92c382a39e.mockapi.io/api/movie/movie";

    const getMovies = (callback) => {
        axios
        .get(baseUrl)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

export default getMovies