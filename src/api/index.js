import axios from 'axios' 
let personalApi = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/' ,
})
export default personalApi ;