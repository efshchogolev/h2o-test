import s from './Menu.module.scss'
import IconComponent from '../IconComponent/IconComponent.tsx'
import { IconName } from '../../@types'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

const ICONS: { iconName: IconName; width: number; link: string }[] = [
  {
    iconName: 'calendar',
    width: 28,
    link: 'timetable',
  },
  {
    iconName: 'report',
    width: 32,
    link: 'reports',
  },
  {
    iconName: 'box',
    width: 33,
    link: 'archive',
  },
  {
    iconName: 'team',
    width: 42,
    link: 'teams',
  },
  {
    iconName: 'money',
    width: 33,
    link: 'money',
  },
  {
    iconName: 'pieChart',
    width: 36,
    link: '/',
  },
  {
    iconName: 'gear',
    width: 33,
    link: 'settings',
  },
]

const Menu = () => {
  return (
    <aside className={s.menu}>
      <nav className={s.container}>
        <IconComponent width={64} height={38.5} iconName={'logo'} />
        <ul className={s.menuItems}>
          {ICONS.map((menuItem) => (
            <li className={s.menuItem} key={menuItem.iconName}>
              <NavLink
                className={({ isActive }) =>
                  cn(s.link, isActive && s.link_active)
                }
                to={menuItem.link}
              >
                <IconComponent
                  width={menuItem.width}
                  height={44}
                  iconName={menuItem.iconName}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
