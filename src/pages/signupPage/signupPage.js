import { Container, Row, Col } from "react-bootstrap"
import SignupForm from "../../components/signup/SignupForm"

const SignupPage = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} >
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage