import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import carsService from '../../services/cars.services'
import './CreateCarForm.css'
import { useNavigate } from "react-router-dom"

const CreateCarForm = () => {

    const [carData, setCarData] = useState(
        {
            brand: "",
            model: "",
            image: "",
            generation: "",
            production: ""
        }
    )

    const { brand, model, image, generation, production } = carData

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

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="brand">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" value={brand} onChange={handleInput} name="brand" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="model">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" value={model} onChange={handleInput} name="model" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" value={image} onChange={handleInput} name="image" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="generation">
                    <Form.Label>Generación</Form.Label>
                    <Form.Control type="text" value={generation} onChange={handleInput} name="generation" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="production">
                    <Form.Label>Producción</Form.Label>
                    <Form.Control type="text" value={production} onChange={handleInput} name="production" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

                <Button variant="primary" type="submit">
                    Crear coche
                </Button>
            </Form>
        </Container>
    )
}

export default CreateCarForm