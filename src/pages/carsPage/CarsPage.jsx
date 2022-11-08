import './CarsPage.css'
import { Container } from 'react-bootstrap'
import CarList from '../../components/cars/cars'

const CarsPage = () => {
    return (
        <>
            <Container>
                <h1>Pagina de coches</h1>
                <CarList />
            </Container>
        </>
    )
}

export default CarsPage