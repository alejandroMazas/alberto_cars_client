import './SignupForm.css'
import { Form } from 'react-bootstrap'
import { useState } from 'react'

const SignupForm = () => {

    const [signupData, setSignupData] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )

    const handleSubmit = e => {
        e.preventDefault()

    }

    const handleInput = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })

        // if (name === 'username') setSignupData({ ...signupData, username: value })
        // if (name === 'email') setSignupData({ ...signupData, email: value })
        // if (name === 'password') setSignupData({ ...signupData, password: value })
    }

    const { username, email, password } = signupData

    return (
        <Form onSubmit={handleSubmit}>
            <h4 className='label'>Registro</h4>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInput} name="username" />
                <Form.Text className="text-muted">
                    Inserte un nombre de usuario.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Dirección de e-mail</Form.Label>
                <Form.Control type="text" value={email} onChange={handleInput} name="email" />
                <Form.Text className="text-muted">
                    Inserte una dirección de e-mail.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInput} name="password" />
                <Form.Text className="text-muted">
                    Inserte una contraseña.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default SignupForm