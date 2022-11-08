import CarCard from "../card/card"
import { useEffect, useState } from "react"
import carsService from "../../services/cars.services"

const CarList = () => {

    const [cars, setCars] = useState()

    useEffect(() => {
        carsService
            .getAllCars()
            .then(({ data }) => setCars(data))
            .then(err => console.log(err))
    }, [])

    return (
        cars?.map(car => <p>{car.brand} {car.model}</p>)
    )
}

export default CarList