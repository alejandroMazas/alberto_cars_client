import { Routes, Route } from 'react-router-dom'
import CarsPage from '../pages/carsPage/CarsPage'
import CarsDetailsPage from '../pages/carsPage/CarsDetailsPage/CarsDetailsPage'
import CreateCarsPage from '../pages/carsPage/CreateCarsPage/CreateCarsPage'
import SignupPage from '../pages/signupPage/signupPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<p>Home Page</p>}></Route>
            <Route path='/ListaCompleta' element={<CarsPage />}></Route>
            <Route path='/Detalles/:id' element={<CarsDetailsPage />}></Route>
            <Route path='*' element={<p>Error 404!</p>}></Route>
            <Route path='/CrearCoches' element={<CreateCarsPage />}></Route>
            <Route path='/Registro' element={<SignupPage />}></Route>
        </Routes >
    )
}

export default AppRoutes