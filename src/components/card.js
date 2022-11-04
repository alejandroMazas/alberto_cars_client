import { useState } from "react"

const CarCard = () => {

    const [active, setActive] = useState(false)
    const cardView = active ? "active" : ""

    return (
        <div className={cardView} onClick={(e) => { setActive(!active) }}>
            <h3>CardName</h3>
            <picture>
                <img src="https://static1.diariovasco.com/www/multimedia/202010/27/media/cortadas/ateca-kJtF-U120582291838eyG-624x385@RC.jpg"
                    alt="cardImage" />
            </picture>
        </div>
    )
}

export default CarCard