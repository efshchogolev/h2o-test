import s from './Header.module.scss'
import CircleNavigateButton from '../CircleNavigateButton/CircleNavigateButton.tsx'
import ProfileButton from '../ProfileButton/ProfileButton.tsx'
import Tabs from '../Tabs/Tabs.tsx'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.navigationContainer}>
        <div className={s.buttonsContainer}>
          <CircleNavigateButton disabled />
          <CircleNavigateButton right />
        </div>
        <Tabs />
      </div>
      <ProfileButton />
    </header>
  )
}

export default Header
