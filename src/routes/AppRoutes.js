import { Routes, Route } from 'react-router-dom'
import CarsPage from '../pages/carsPage/CarsPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/ListaCompleta' element={<CarsPage />}></Route>
        </Routes>
    )
}

export default AppRoutes