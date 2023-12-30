import { Routes, Route, Outlet, Link } from 'react-router-dom'

import SignUpList from './pages/SignUpList'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/signuplist' element={<SignUpList />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
