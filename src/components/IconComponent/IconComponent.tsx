/// <reference types="vite-plugin-svgr/client" />
import Logo from '../../assets/logo.svg?react'
import Calendar from '../../assets/calendar.svg?react'
import Report from '../../assets/report.svg?react'
import Box from '../../assets/box.svg?react'
import Team from '../../assets/team.svg?react'
import Money from '../../assets/money.svg?react'
import PieChart from '../../assets/pieChart.svg?react'
import Gear from '../../assets/gear.svg?react'
import Arrow from '../../assets/arrow.svg?react'
import { IconProps } from '../../@types'
import cn from 'classnames'
import s from './IconComponent.module.scss'

const IconComponent = (props: IconProps) => {
  const iconProps = {
    className: cn(props.className, s.icon),
    width: props.width,
    height: props.height,
    style: props.style,
  }

  switch (props.iconName) {
    case 'logo': {
      return <Logo {...iconProps} />
    }
    case 'calendar': {
      return <Calendar {...iconProps} />
    }
    case 'report': {
      return <Report {...iconProps} />
    }
    case 'box': {
      return <Box {...iconProps} />
    }
    case 'team': {
      return <Team {...iconProps} />
    }
    case 'money': {
      return <Money {...iconProps} />
    }
    case 'pieChart': {
      return <PieChart {...iconProps} />
    }
    case 'gear': {
      return <Gear {...iconProps} />
    }
    case 'arrow': {
      return <Arrow {...iconProps} />
    }
    default:
      return null
  }
}

export default IconComponent
