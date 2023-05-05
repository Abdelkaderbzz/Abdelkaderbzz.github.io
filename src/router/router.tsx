import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './../views/Home'
import Register from './../views/Auth/Register'
import Login from './../views/Auth/Login'
import NotFound from './../views/NotFound'
import MainLayout from '../layouts/MainLayout';
const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="#">
        <Routes>
          <Route
            path='/'
            element={
              <MainLayout />
            }
          >
            <Route index element={<Home />} />
            <Route path='/contact' element={<Home />} />
            <Route path='/project' element={<Home />} />
            <Route path='/service' element={<Home />} />
            <Route path='/portfolio' element={<Home />} />
            <Route path='/blog' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/history' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RoutesProvider
