import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUpList1 from './pages/SignUpList1'
import SignUpList2 from './pages/SignUpList2'
import SignUpList3 from './pages/SignUpList3'
import ListAdmin from './pages/ListAdmin'
import Merch from './pages/Merch'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route index element={<Home />} /> */}

        <Route path='/signuplist1' element={<SignUpList1 />} />
        <Route path='/signuplist2' element={<SignUpList2 />} />
        <Route path='/signuplist3' element={<SignUpList3 />} />
        <Route path='/listadmin' element={<ListAdmin />} />

        <Route path='/merch' element={<Merch />} />

        <Route path='*' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
