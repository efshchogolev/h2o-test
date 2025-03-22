import s from './Main.module.scss'
import Menu from '../Menu/Menu.tsx'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className={s.main}>
      <Menu />
      <Outlet />
    </div>
  )
}

export default Main
