import { Home, UpdatingPage, CreatingPage} from "./pages";
import './App.css';
import {Switch, Route, BrowserRouter, Routes, Router} from  'react-router-dom';

function App() {



  return (
    <div className="wrapper">

      <div className="content">
        
    <Routes>
        <Route path="/" element = {<Home/>} exact />
        <Route path="/creatingpage" element={<CreatingPage/>} exact />
        <Route path="/creatingpage/:superheroId" element={<CreatingPage/>} exact/>
        

        </Routes>
        
      </div>
    </div>
  );

}

export default App;