import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Detail from './components/Detail';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
      <Routes>  
    <Route exact path='/' element={< App />}></Route>  
    <Route exact path='/detail' element={< Detail />}></Route>  
    </Routes>  
    </BrowserRouter>

)
