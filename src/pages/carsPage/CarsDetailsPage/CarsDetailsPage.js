import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import carsService from '../../../services/cars.services'
import './CarsDetailsPage.css'


const CarDetails = () => {

    const [carDetails, setCarDetails] = useState({})
    const [isLoadingDetails, setLoadingDetails] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        loadDetails()
    }, [])

    const loadDetails = () => {
        setLoadingDetails(true)
        carsService
            .getOneCar(id)
            .then(({ data }) => {
                setCarDetails(data)
                setLoadingDetails(false)
            })
            .catch(err => console.log(err))
    }


    return (
        isLoadingDetails
            ?
            <Loader />
            :
            <>
                <img className='detailsImg' src={carDetails.image} alt={`${carDetails.brand} ${carDetails.model}`} />
                <Container className='details'>
                    <h3>{carDetails.brand} {carDetails.model}</h3>
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