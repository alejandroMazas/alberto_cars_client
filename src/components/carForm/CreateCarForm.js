import { Button, Container, Form } from 'react-bootstrap'
import './CreateCarForm.css'

const CreateCarForm = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="brand">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="model">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="generation">
                    <Form.Label>Generación</Form.Label>
                    <Form.Control type="number" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="production">
                    <Form.Label>Producción</Form.Label>
                    <Form.Control type="text" />
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