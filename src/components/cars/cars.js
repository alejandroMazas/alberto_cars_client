import CarCard from "../card/card"
import { useEffect, useState } from "react"
import carsService from "../../services/cars.services"
import './cars.css'

const CarList = () => {

    const [cars, setCars] = useState()

    useEffect(() => {
        carsService
            .getAllCars()
            .then(({ data }) => setCars(data))
            .then(err => console.log(err))
    }, [])

    return (
        <div className="list">
            {cars?.map(car =>
                <CarCard {...car} />
            )
            }
        </div>
    )
}

export default CarList