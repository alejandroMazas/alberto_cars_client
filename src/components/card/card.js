import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './card.css'

const CarCard = ({ _id, brand, model, image }) => {

    return (
        <>
            <div className="CarCard">
                <Link className="carLink" to={`/Detalles/${_id}`}>
                    <Card
                        className='card'
                        style={{ width: '18rem' }}>
                        <Container>
                            <Card.Img variant="top" src={image} alt='carImage' />
                        </Container>
                        <Card.Body>
                            <Card.Title>{brand} {model}</Card.Title>
                        </Card.Body>
                    </Card >
                </Link>
            </div>
        </>
    )
}

export default CarCard