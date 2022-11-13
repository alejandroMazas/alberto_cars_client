import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import carsService from '../../services/cars.services'
import './CarsDetails.css'


const CarDetails = () => {

    const [carDetails, setCarDetails] = useState({})

    const { id } = useParams()

    useEffect(() => {
        carsService
            .getOneCar(id)
            .then(({ data }) => {
                setCarDetails(data)
            })
            .catch(err => console.log(err))

    })

    return (
        <>
            <div>
                <img src={carDetails.image} alt={`${carDetails.brand} ${carDetails.model} image`} />
            </div>
            <Container>
                <h3>Marca: {carDetails.brand}</h3>
                <h3>Modelo: {carDetails.model}</h3>

                <h4>Características</h4>
                <ul>
                    <li>Generación: {carDetails.generation}</li>
                    <li>Producción: {carDetails.production}</li>
                </ul>


            </Container>
        </>
    )
}

export default CarDetails