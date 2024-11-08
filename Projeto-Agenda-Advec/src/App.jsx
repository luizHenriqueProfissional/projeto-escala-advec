import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Cultos from "./Pages/Cultos";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import styles from '../src/App.module.css'
import Escala from './Pages/Escala';
function App() {
    return (
      <div className="App">
      <div className={styles.container}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/cultos' element={<Cultos/>} />
        <Route path='/escala' element={<Escala/>}/>
    </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
      </div>
    );
  }
  export default App;