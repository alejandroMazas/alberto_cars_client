import { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import carsService from '../../services/cars.services'
import './CreateCarForm.css'
import { useNavigate } from "react-router-dom"
import uploadService from '../../services/upload.services'

const CreateCarForm = () => {

    const [carData, setCarData] = useState(
        {
            brand: "",
            model: "",
            image: "",
            generation: "",
            production: "",

            carType: "",
            segment: "",
            doors: 0,
            carbody: "",

            carLength: 0,
            width: 0,
            height: 0,
            battle: 0,
            plazas: 0,
            distribution: "",

            motor: "",
            mechanic: "",
            propulsion: "",
            carfuel: ""
        }
    )

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
            .saveCar(carData)
            .then(() => {
                navigate('/ListaCompleta')
            })
            .catch(err => console.log(err))
    }

    const handleImageUpload = (e) => {

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setCarData({ ...carData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))

    }

    return (
        <Container>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={{ span: 4 }}>
                        <h4 className='label'>Descripci??n</h4>
                        <Form.Group className="mb-3" controlId="brand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" value={brand} onChange={handleInput} name="brand" />
                            <Form.Text className="text-muted">
                                Inserte la marca del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="model">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" value={model} onChange={handleInput} name="model" />
                            <Form.Text className="text-muted">
                                Inserte el modelo del veh??culo.                            </Form.Text>
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="text" value={image} onChange={handleInput} name="image" />
                            <Form.Text className="text-muted">
                                Inserte una url de una imagen del veh??culo.
                            </Form.Text>
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Imagen (archivo)</Form.Label>
                            <Form.Control type="file" onChange={handleImageUpload} />
                            <Form.Text className="text-muted">
                                Inserte un archivo de imagen del veh??culo.
                            </Form.Text>
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="generation">
                            <Form.Label>Generaci??n</Form.Label>
                            <Form.Control type="text" value={generation} onChange={handleInput} name="generation" />
                            <Form.Text className="text-muted">
                                Inserte el n??mero de la generaci??n del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="production">
                            <Form.Label>Producci??n</Form.Label>
                            <Form.Control type="text" value={production} onChange={handleInput} name="production" />
                            <Form.Text className="text-muted">
                                Inserte el a??o de inicio y el a??o de finalizaci??n de la producci??n del veh??culo.
                            </Form.Text>
                        </Form.Group>

                    </Col>
                    <Col md={{ span: 4 }}>
                        <h4 className='label'>Tipolog??a</h4>

                        <Form.Group className="mb-3" controlId="carType">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" value={carType} onChange={handleInput} name="carType" />
                            <Form.Text className="text-muted">
                                Inserte la tipolog??a del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="segment">
                            <Form.Label>Segmento</Form.Label>
                            <Form.Control type="text" value={segment} onChange={handleInput} name="segment" />
                            <Form.Text className="text-muted">
                                Inserte el tipo de segmento del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="doors">
                            <Form.Label>N??mero de puertas</Form.Label>
                            <Form.Control type="number" value={doors} onChange={handleInput} name="doors" />
                            <Form.Text className="text-muted">
                                Inserte el n??mero de puertas del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="carbody">
                            <Form.Label>Carrocer??a</Form.Label>
                            <Form.Control type="text" value={carbody} onChange={handleInput} name="carbody" />
                            <Form.Text className="text-muted">
                                Inserte el tipo de Carrocer??a del veh??culo.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <h4 className='label'>Dimensiones</h4>

                        <Form.Group className="mb-3" controlId="carLength">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="number" value={carLength} onChange={handleInput} name="carLength" />
                            <Form.Text className="text-muted">
                                Inserte la longitud del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="width">
                            <Form.Label>Anchura</Form.Label>
                            <Form.Control type="number" value={width} onChange={handleInput} name="width" />
                            <Form.Text className="text-muted">
                                Inserte la anchura del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="height">
                            <Form.Label>Altura</Form.Label>
                            <Form.Control type="number" value={height} onChange={handleInput} name="height" />
                            <Form.Text className="text-muted">
                                Inserte la altura del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="battle">
                            <Form.Label>Battalla</Form.Label>
                            <Form.Control type="number" value={battle} onChange={handleInput} name="battle" />
                            <Form.Text className="text-muted">
                                Inserte la battala del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="plazas">
                            <Form.Label>N??mero de plazas</Form.Label>
                            <Form.Control type="number" value={plazas} onChange={handleInput} name="plazas" />
                            <Form.Text className="text-muted">
                                Inserte el n??mero de plazas del veh??culo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="distribution">
                            <Form.Label>Distribuci??n</Form.Label>
                            <Form.Control type="text" value={distribution} onChange={handleInput} name="distribution" />
                            <Form.Text className="text-muted">
                                Inserte el tipo de distribuci??n del veh??culo.
                            </Form.Text>
                        </Form.Group>
                    </Col>

                </Row>

                <h4 className='label'>Caracter??sticas t??cnicas</h4>

                <Form.Group className="mb-3" controlId="motor">
                    <Form.Label>Motorizaci??n</Form.Label>
                    <Form.Control type="text" value={motor} onChange={handleInput} name="motor" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de motorizaci??n del veh??culo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="mechanic">
                    <Form.Label>Disposici??n mec??nica</Form.Label>
                    <Form.Control type="text" value={mechanic} onChange={handleInput} name="mechanic" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de disposici??n mec??nica del veh??culo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="propulsion">
                    <Form.Label>Propulsi??n</Form.Label>
                    <Form.Control type="text" value={propulsion} onChange={handleInput} name="propulsion" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de propulsi??n del veh??culo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="carfuel">
                    <Form.Label>Combustible</Form.Label>
                    <Form.Control type="text" value={carfuel} onChange={handleInput} name="carfuel" />
                    <Form.Text className="text-muted">
                        Inserte el tipo de combustible del veh??culo.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

                <Button variant="primary" type="submit">
                    Crear coche
                </Button>
            </Form>
        </Container >
    )
}

export default CreateCarForm