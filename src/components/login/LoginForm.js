import './LoginForm.css'
import { Form, Button } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth.services'
import { AuthContext } from '../../context/authContext'

const LoginForm = () => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .loginUser(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))

    }

    const handleInput = e => {
        const { value, name } = e.currentTarget
        setLoginData({ ...loginData, [name]: value })

        // if (name === 'username') setSignupData({ ...signupData, username: value })
        // if (name === 'email') setSignupData({ ...signupData, email: value })
        // if (name === 'password') setSignupData({ ...signupData, password: value })
    }

    const { email, password } = loginData

    return (
        <Form onSubmit={handleSubmit}>
            <h4 className='label'>Iniciar Sesión</h4>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Dirección de e-mail</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInput} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInput} name="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Iniciar sesión
            </Button>
        </Form>
    )
}

export default LoginForm