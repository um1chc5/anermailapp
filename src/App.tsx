import './App.css'
import { Fragment, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { path } from './constants/path.constant'
import { MailContext } from './context/MailAppProvider'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login'

function App() {
  const {
    lsData: { isLogin }
  } = useContext(MailContext)

  return (
    <Fragment>
      <Routes>
        <Route path={path.login} element={isLogin ? <Navigate to={'main'} /> : <Login />} />
        <Route path='main/*' element={isLogin ? <MainLayout /> : <Navigate to={path.login} />} />
        <Route path='*' element={<Navigate to={'/main'} />} />
      </Routes>
    </Fragment>
  )
}

export default App
