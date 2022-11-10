import { useState } from "react"
import { Card } from "react-bootstrap"
import './card.css'

const CarCard = ({ brand, model, image }) => {

    // const [active, setActive] = useState(false)
    // const cardView = active ? "active" : ""

    return (
        // <div  className= onMouseOver={(e) => { setActive(!active) }} onMouseOut={(e) => setActive(!active)}>
        <Card className="CarCard"  style={{ width: '18rem' }} >
            <Card.Img className="imgCard" variant="top" src={image} alt='carImage' />
            <Card.Body>
                <Card.Title>{brand} {model}</Card.Title>
            </Card.Body>
        </Card >
        // </div>
    )
}

export default CarCard