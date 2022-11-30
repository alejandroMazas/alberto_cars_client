import CarCard from "../card/card"
import { useEffect, useState, useContext } from "react"
import carsService from "../../services/cars.services"
import './cars.css'
import { Button, Col, Container, Row } from "react-bootstrap"
import Loader from "../Loader/Loader"
import { AuthContext } from "../../context/authContext"


const CarList = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [cars, setCars] = useState([])
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

    const deleteCar = (carId) => {
        carsService
            .deleteCar(carId)
            .then(({ data }) => {
                const filteredCars = cars.filter(car => {
                    return (car._id !== data._id)
                })
                setCars(filteredCars)
            })
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
                            {
                                (isLoggedIn && user.role === 'ADMIN')
                                    ?
                                    <Button onClick={() => deleteCar(car._id)}>Eliminar coche</Button>
                                    :
                                    ""

                            }

                        </Col>
                )
                }
            </Row>
        </Container >
    )
}

export default CarList