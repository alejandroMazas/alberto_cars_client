import CarCard from "../card/card"
import { useEffect, useState } from "react"
import carsService from "../../services/cars.services"
import './cars.css'
import { Col, Container, Row } from "react-bootstrap"
import Loader from "../Loader/Loader"

const CarList = () => {

    const [cars, setCars] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadList()
    }, [])

    const loadList = () => {
        setLoading(true)
        carsService
            .getAllCars()
            .then(({ data }) => {
                setLoading(false)
                setCars(data)
            })

            .then(err => console.log(err))
    }

    return (
        <Container>
            <Row >
                {cars?.map(car =>
                    loading
                        ?
                        <Loader />
                        :
                        < Col key={car._id} md={{ span: 4 }} sm={{ span: 6 }} lg={{ span: 3 }}>
                            <CarCard {...car} />
                        </Col>
                )
                }
            </Row>
        </Container >
    )
}

export default CarList