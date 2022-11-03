import React, { useState } from "react"
import './App.css';
import './components/cars'
import CarList from "./components/cars";

const Prueba = (props) => {

  const [names, setNames] = useState(true)
  const [color, setColor] = useState(true)
  const changeColor = color ? "blueColor" : "redColor"
  const changeNames = names ? props.user : "default user"

  return (
    <div>
      <p className={changeColor}>Coches de {changeNames}</p>
      <button onClick={() => { setNames(!names) }}>Cambiar nombre</button>
      <button onClick={() => { setColor(!color) }}>Cambiar color</button>

    </div>
  )
}



function App() {
  return (
    <div className="App">

      <h1>Funciona</h1>

      <Prueba user="Alberto" />
      <Prueba user="Alejandro" />
      <CarList />

    </div>
  );
}

export default App;