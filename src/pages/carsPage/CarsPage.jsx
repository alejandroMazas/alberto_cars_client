import './CarsPage.css'
import { Container } from 'react-bootstrap'
import CarList from '../../components/cars/cars'

const CarsPage = () => {
    return (
        <>
            <Container>
                <h2 className='heading'>Lista Completa</h2>
                <CarList />
            </Container>
        </>
    )
}

export default CarsPage