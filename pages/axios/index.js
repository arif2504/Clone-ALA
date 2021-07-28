import axios from 'axios'

const instance = axios.create({
       baseURL: `${process.env.PRODUCT_API}`,
})
// axios.interceptors.response.use( (response) => response.data, error)
export default instance