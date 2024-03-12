import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ProductList from './components/ProductList.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AddToCart from './components/AddToCart.jsx'
import { Provider } from 'react-redux'


const router = createBrowserRouter(    // creating Routes 
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/home' element={<ProductList/>}/>    
      <Route path='/signup' element={<SignUp/>}/> 
      <Route path='/login' element={<Login/>}/>       
      <Route path='/addtocart/:productId' element={<AddToCart/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
