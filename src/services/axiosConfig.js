import axios from "axios"

const axiosConfig = axios.create({
    baseURL: "https://tecno-start-api.herokuapp.com/v1/api"
})


const axiosConfigAuthorized = axios.create({
    baseURL: "https://tecno-start-api.herokuapp.com/v1/api", headers: {
        'Authorization': sessionStorage.getItem('token')
    }
})

export {
    axiosConfig, 
    axiosConfigAuthorized
}