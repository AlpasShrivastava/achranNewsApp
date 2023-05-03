import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Frontend/Pages/Home/Home";
import Header from "./Frontend/Components/Header";
import Details from "./Frontend/Components/Details";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
         <Route exact path ="/use-state" element={<useState />}/>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />
        </Route>
      </Routes>
    </>
  ); 
}

export default App;
