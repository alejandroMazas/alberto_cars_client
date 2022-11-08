import axios from 'axios'

class CarsService {

    constructor() {
        this.axiosApp = axios.create({ baseURL: 'http://localhost:5005' })
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

}

const carsService = new CarsService()

export default carsService