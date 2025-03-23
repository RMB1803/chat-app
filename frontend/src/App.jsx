import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProtectRoute from './componenets/auth/ProtectRoute'
import { LayoutLoader } from './componenets/layout/Loaders'

// importing the pages dynamically using lazy
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))

let user = true

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route path='/' element={<ProtectRoute user={user}> <Home /> </ProtectRoute>} />
          <Route path='/chat/:chatId' element={<ProtectRoute user={user}> <Chat /> </ProtectRoute>} />
          <Route path='/groups' element={<ProtectRoute user={user}> <Groups /> </ProtectRoute>} />
          <Route path='/login' element={<ProtectRoute user={!user} redirect="/"> <Login /> </ProtectRoute>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
