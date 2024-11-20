import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <hr></hr>
      <div className="flex">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/list" element={<List></List>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App