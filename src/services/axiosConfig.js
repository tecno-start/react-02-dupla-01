import axios from "axios"


export default function getAxios(authorized = false) {
    const config = { baseURL: 'https://tecno-start-api.herokuapp.com/v1/api' }
    if (authorized) {
        config['headers'] = {}
        config['headers']['Authorization'] = sessionStorage.getItem('token')
    }
    return axios.create(config)
}
