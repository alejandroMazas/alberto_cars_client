import { useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './card.css'

const CarCard = ({ _id, brand, model, image }) => {

    const [actived, setActive] = useState(false)
    const cardView = actived ? "actived" : ""

    return (
        <>
            <div className="CarCard">
                <Link className="carLink" to={`/Detalles/${_id}`}>
                    <Card
                        className={cardView}
                        style={{ width: '18rem' }}
                        onMouseOver={(e) => { setActive(!actived) }}
                        onMouseOut={(e) => setActive(!actived)} >

                        <Card.Img variant="top" src={image} alt='carImage' />
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