import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr></hr>
      <div className="flex">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add url={url}></Add>}></Route>
          <Route path="/list" element={<List url={url}></List>}></Route>
          <Route path="/orders" element={<Orders url={url}></Orders>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App