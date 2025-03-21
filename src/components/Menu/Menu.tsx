import s from './Menu.module.scss'
import IconComponent from '../IconComponent/IconComponent.tsx'
import { IconName } from '../../@types'

const ICONS: { iconName: IconName; width: number }[] = [
  {
    iconName: 'calendar',
    width: 28,
  },
  {
    iconName: 'report',
    width: 32,
  },
  {
    iconName: 'box',
    width: 33,
  },
  {
    iconName: 'team',
    width: 42,
  },
  {
    iconName: 'money',
    width: 33,
  },
  {
    iconName: 'pieChart',
    width: 36,
  },
  {
    iconName: 'gear',
    width: 33,
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
              <IconComponent
                width={menuItem.width}
                height={44}
                iconName={menuItem.iconName}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Menu
