import s from './Header.module.scss'
import CircleNavigateButton from '../CircleNavigateButton/CircleNavigateButton.tsx'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.buttonsContainer}>
        <CircleNavigateButton disabled />
        <CircleNavigateButton right />
      </div>
    </header>
  )
}

export default Header
