import s from './Cabinet.module.scss'
import Header from '../Header/Header.tsx'
import { Outlet } from 'react-router-dom'

const Cabinet = () => {
  return (
    <div className={s.cabinet}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Cabinet
