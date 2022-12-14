import axios from 'axios'

class CarsService {

    constructor() {
        this.axiosApp = axios.create({ baseURL: 'http://localhost:5005' })

        this.axiosApp.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllCars = () => {
        return this.axiosApp.get('/cars')
    }

    getOneCar = id => {
        return this.axiosApp.get(`/cars/${id}`)
    }

    saveCar = car => {
        return this.axiosApp.post(`/createCars`, car)
    }

    updateCar = (car, id) => {
        return this.axiosApp.put(`/cars/${id}/update`, car)
    }

    deleteCar = (id) => {
        return this.axiosApp.delete(`/cars/${id}/delete`)
    }

}

const carsService = new CarsService()

export default carsService