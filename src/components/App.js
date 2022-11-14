import './App.css';
import './cars/cars'
import Navigation from "./navbar/Navigation";
import AppRoutes from "../routes/AppRoutes";
import Footer from './footer/Footer';

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

      <Navigation />
      {/* <Prueba user="Alberto" />
      <Prueba user="Alejandro" /> */}
      <AppRoutes />

      <Footer />



    </div>
  );
}

export default App;
