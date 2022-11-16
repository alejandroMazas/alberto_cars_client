import './SignupForm.css'
import { Form } from 'react-bootstrap'

const SignupForm = () => {

    const handleSubmit = e => {

        e.preventDefault()

    }

    return (
        <h4 className='label'>Descripción</h4>
        // <Form onSubmit={handleSubmit}>
        //     <h4 className='label'>Descripción</h4>
        //     <Form.Group className="mb-3" controlId="brand">
        //         <Form.Label>Marca</Form.Label>
        //         <Form.Control type="text" value={brand} onChange={handleInput} name="brand" />
        //         <Form.Text className="text-muted">
        //             Inserte la marca del vehículo.
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="model">
        //         <Form.Label>Modelo</Form.Label>
        //         <Form.Control type="text" value={model} onChange={handleInput} name="model" />
        //         <Form.Text className="text-muted">
        //             Inserte el modelo del vehículo.
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="image">
        //         <Form.Label>Imagen</Form.Label>
        //         <Form.Control type="text" value={image} onChange={handleInput} name="image" />
        //         <Form.Text className="text-muted">
        //             Inserte una imagen del vehículo.
        //         </Form.Text>
        //     </Form.Group>
        // </Form>
    )
}

export default SignupForm