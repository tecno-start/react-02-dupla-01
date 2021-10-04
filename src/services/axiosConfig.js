import axios from "axios"

const axiosConfig = axios.create({
    baseURL: "https://tecno-start-api.herokuapp.com/v1/api"
})

export {
    axiosConfig,
}