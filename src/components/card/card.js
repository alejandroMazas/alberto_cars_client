import { useState } from "react"

const CarCard = ({ _id, brand, model, image }) => {

    const [active, setActive] = useState(false)
    const cardView = active ? "active" : ""

    return (
        <div className={cardView} onClick={(e) => { setActive(!active) }}>
            <div className="car" key={_id}>
                <p>{brand} {model}</p>
                <picture>
                    <img src={image} alt='carImage' />
                </picture>
            </div>
        </div>
    )
}

export default CarCard