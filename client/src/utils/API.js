import axios from "axios";

function getBooks(query){
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
}

export default getBooks