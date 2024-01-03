import { Routes, Route } from 'react-router-dom'

import SignUpList from './pages/SignUpList'
import Home from './pages/Home'
import Practice from './pages/Practice'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route path='/signuplist' element={<SignUpList />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
