import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

                    <section>

                        <Row>
                            <Col md={{ span: 3 }}>
                                <h3>{carDetails.brand} {carDetails.model}</h3>
                                <h5>Generación: {carDetails.generation} </h5>
                                <h5>Producción: {carDetails.production}</h5>
                            </Col>

                            <Col md={{ span: 3 }}>
                                <h4>Tipología</h4>
                                <ul>
                                    <li>Tipo: {carDetails.carType}</li>
                                    <li>Segmento: {carDetails.segment}</li>
                                    <li>Puertas: {carDetails.doors}</li>
                                    <li>Carrocería: {carDetails.carbody}</li>
                                </ul>
                            </Col>

                            <Col md={{ span: 3 }}>
                                <h4>Dimensiones</h4>
                                <ul>
                                    <li>Longitud: {carDetails.carLength} m</li>
                                    <li>Anchura: {carDetails.width} m</li>
                                    <li>Altura: {carDetails.height} m</li>
                                    <li>Battalla: {carDetails.battle} m </li>
                                    <li>Plazas: {carDetails.plazas}</li>
                                    <li>Distribución: {carDetails.distribution}</li>
                                </ul>
                            </Col>

                            <Col md={{ span: 3 }}>

                                <h4>Características técnicas</h4>
                                <ul>
                                    <li>Motorización: {carDetails.motor}</li>
                                    <li>Disposición mecánica: {carDetails.mechanic}</li>
                                    <li>Propulsión motríz: {carDetails.propulsión}</li>
                                    <li>Combustible: {carDetails.carfuel}</li>
                                </ul>
                            </Col>
                        </Row>
                    </section>

                </Container>
            </>
    )
}

export default CarDetails