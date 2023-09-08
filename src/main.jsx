import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import Faq from './pages/faq.jsx'
import Store from './pages/store.jsx'
import { HashRouter , Routes , Route } from 'react-router-dom'
import './pages/main.scss'
//import 'main.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
      <Route path='./' element={<Index/>}></Route>
      <Route path='./faq' element={<Faq/>}></Route>
      <Route path='./store' element={<Store/>}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
