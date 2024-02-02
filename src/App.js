import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Add from "./components/Add";
import Details from "./components/Details";
import Update from "./components/Update";

function App() {
  return (
          <div className="App">
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<Home/>}></Route>
                      <Route path='/add' element={<Add/>}></Route>
                      <Route path='/update/:id' element={<Update/>}></Route>
                      <Route path='/view/:id' element={<Details/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
  );
}

export default App;
