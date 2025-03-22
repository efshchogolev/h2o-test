import s from './ProfileButton.module.scss'
import avatarPath from '../../assets/avatar.png'
import IconComponent from '../IconComponent/IconComponent.tsx'

const ProfileButton = () => {
  return (
    <button className={s.profileButton}>
      <img src={avatarPath} alt="Аватарка" className={s.avatar} />
      <div className={s.infoContainer}>
        <span className={s.name}>Kristina 🐰</span>
        <span className={s.role}>менеджер продаж</span>
      </div>
      <IconComponent
        width={10.5}
        height={6.5}
        iconName={'dropdownArrow'}
        className={s.dropdownIcon}
      />
    </button>
  )
}

export default ProfileButton
