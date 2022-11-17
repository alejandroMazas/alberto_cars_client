import { Container, Row, Col } from "react-bootstrap"
import LoginForm from "../../components/login/LoginForm"

const LoginPage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} >
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage