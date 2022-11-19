import { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import carsService from '../../services/cars.services'
import './UpdateCarForm.css'
import { useNavigate, useParams } from "react-router-dom"

const UpdateCarForm = () => {

    const [carData, setCarData] = useState({})

    const { id } = useParams()

    const handleInput = (e) => {
        const { name, value } = e.currentTarget

        setCarData({
            ...carData,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        carsService
            .updateCar(carData, id)
            .then(() => {
                navigate('/ListaCompleta')
            })
            .catch(err => console.log(err))
    }

    const {
        brand,
        model,
        image,
        generation,
        production,
        carType,
        segment,
        doors,
        carbody,
        carLength,
        width,
        height,
        battle,
        plazas,
        distribution,
        motor,
        mechanic,
        propulsion,
        carfuel
    } = carData

    return (
        <Container>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={{ span: 4 }}>
                        <h4 className='label'>Descripción</h4>
                        <Form.Group className="mb-3" controlId="brand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" value={brand} onChange={handleInput} name="brand" />
                            <Form.Text className="text-muted">
                                Inserte la marca del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="model">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" value={model} onChange={handleInput} name="model" />
                            <Form.Text className="text-muted">
                                Inserte el modelo del vehículo.                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="text" value={image} onChange={handleInput} name="image" />
                            <Form.Text className="text-muted">
                                Inserte una imagen del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="generation">
                            <Form.Label>Generación</Form.Label>
                            <Form.Control type="text" value={generation} onChange={handleInput} name="generation" />
                            <Form.Text className="text-muted">
                                Inserte el número de la generación del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="production">
                            <Form.Label>Producción</Form.Label>
                            <Form.Control type="text" value={production} onChange={handleInput} name="production" />
                            <Form.Text className="text-muted">
                                Inserte el año de inicio y el año de finalización de la producción del vehículo.
                            </Form.Text>
                        </Form.Group>

                    </Col>
                    <Col md={{ span: 4 }}>
                        <h4 className='label'>Tipología</h4>

                        <Form.Group className="mb-3" controlId="carType">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" value={carType} onChange={handleInput} name="carType" />
                            <Form.Text className="text-muted">
                                Inserte la tipología del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="segment">
                            <Form.Label>Segmento</Form.Label>
                            <Form.Control type="text" value={segment} onChange={handleInput} name="segment" />
                            <Form.Text className="text-muted">
                                Inserte el tipo de segmento del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="doors">
                            <Form.Label>Número de puertas</Form.Label>
                            <Form.Control type="number" value={doors} onChange={handleInput} name="doors" />
                            <Form.Text className="text-muted">
                                Inserte el número de puertas del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="carbody">
                            <Form.Label>Carrocería</Form.Label>
                            <Form.Control type="text" value={carbody} onChange={handleInput} name="carbody" />
                            <Form.Text className="text-muted">
                                Inserte el tipo de Carrocería del vehículo.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <h4 className='label'>Dimensiones</h4>

                        <Form.Group className="mb-3" controlId="carLength">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="number" value={carLength} onChange={handleInput} name="carLength" />
                            <Form.Text className="text-muted">
                                Inserte la longitud del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="width">
                            <Form.Label>Anchura</Form.Label>
                            <Form.Control type="number" value={width} onChange={handleInput} name="width" />
                            <Form.Text className="text-muted">
                                Inserte la anchura del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="height">
                            <Form.Label>Altura</Form.Label>
                            <Form.Control type="number" value={height} onChange={handleInput} name="height" />
                            <Form.Text className="text-muted">
                                Inserte la altura del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="battle">
                            <Form.Label>Battalla</Form.Label>
                            <Form.Control type="number" value={battle} onChange={handleInput} name="battle" />
                            <Form.Text className="text-muted">
                                Inserte la battala del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="plazas">
                            <Form.Label>Número de plazas</Form.Label>
                            <Form.Control type="number" value={plazas} onChange={handleInput} name="plazas" />
                            <Form.Text className="text-muted">
                                Inserte el número de plazas del vehículo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="distribution">
                            <Form.Label>Distribución</Form.Label>
                            <Form.Control type="text" value={distribution} onChange={handleInput} name="distribution" />
                            <Form.Text className="text-muted">
                                Inserte el tipo de distribución del vehículo.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                </Row>

                <h4 className='label'>Características técnicas</h4>

                <Form.Group className="mb-3" controlId="motor">
                    <Form.Label>Motorización</Form.Label>
                    <Form.Control type="text" value={motor} onChange={handleInput} name="motor" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de motorización del vehículo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="mechanic">
                    <Form.Label>Disposición mecánica</Form.Label>
                    <Form.Control type="text" value={mechanic} onChange={handleInput} name="mechanic" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de disposición mecánica del vehículo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="propulsion">
                    <Form.Label>Propulsión</Form.Label>
                    <Form.Control type="text" value={propulsion} onChange={handleInput} name="propulsion" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de propulsión del vehículo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="carfuel">
                    <Form.Label>Combustible</Form.Label>
                    <Form.Control type="text" value={carfuel} onChange={handleInput} name="carfuel" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de combustible del vehículo.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

                <Button variant="primary" type="submit">
                    Editar coche
                </Button>
            </Form>
        </Container >
    )
}

export default UpdateCarForm