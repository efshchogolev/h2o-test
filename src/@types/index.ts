import { CSSProperties } from 'react'

export type IconName =
  | 'logo'
  | 'calendar'
  | 'report'
  | 'box'
  | 'team'
  | 'money'
  | 'pieChart'
  | 'gear'
  | 'arrow'
  | 'dropdownArrow'

export type IconProps = {
  width: number
  height: number
  iconName: IconName
  style?: CSSProperties
  className?: string
}

export type CircleNavigateButtonProps = {
  right?: boolean
  disabled?: boolean
}
