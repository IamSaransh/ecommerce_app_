import axios from 'axios'

let url = 'https://react-server-dummy.herokuapp.com';


export function getProducts(){
    return axios.get(`${url}/products`)
    .then(response => response.data)
}