import { Route, Routes } from 'react-router-dom'
import { HomePage } from './page/HomePage'
import { Layout } from './page/Layout'
import Doctor from './page/Doctor'
import Pasient from './page/Pasient'
import './index.css'


const App = () => {
  return (
    <Routes >
      <Route path='/' element={<Layout/>} >
        <Route index element={<HomePage />} />
        <Route path="listDoctor" element={<Doctor/>} />
        <Route path="listPasient" element={<Pasient/>} />
      </Route>
    </Routes>
  )
}

export default App