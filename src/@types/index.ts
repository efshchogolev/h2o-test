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

export type IconProps = {
  width: number
  height: number
  iconName: IconName
  style?: React.CSSProperties
  className?: string
}

export type CircleNavigateButtonProps = {
  right?: boolean
  disabled?: boolean
}
