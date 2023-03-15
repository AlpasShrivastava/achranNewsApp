import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Frontend/Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route exact path='/' element={<Home />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
