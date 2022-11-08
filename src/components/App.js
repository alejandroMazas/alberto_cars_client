import React, { useState } from "react"
import CarsPage from "../pages/carsPage/CarsPage";
import './App.css';
import './cars/cars'

// const Prueba = (props) => {

//   const [names, setNames] = useState(true)
//   const [color, setColor] = useState(true)
//   const changeColor = color ? "blueColor" : "redColor"
//   const changeNames = names ? props.user : "default user"

//   return (
//     <div>
//       <p className={changeColor}>Coches de {changeNames}</p>
//       <button onClick={() => { setNames(!names) }}>Cambiar nombre</button>
//       <button onClick={() => { setColor(!color) }}>Cambiar color</button>

//     </div>
//   )
// }



const App = () => {
  return (
    <div className="App">

      {/* <Prueba user="Alberto" />
      <Prueba user="Alejandro" /> */}
      <CarsPage />

    </div>
  );
}

export default App;
