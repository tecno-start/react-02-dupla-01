import axios from "axios"

const URLBaseAPI = axios.create({
    baseURL: "https://tecno-start-api.herokuapp.com/v1/api"
})

export {
    URLBaseAPI,
}