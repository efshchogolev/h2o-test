export type IconName =
  | 'logo'
  | 'calendar'
  | 'report'
  | 'box'
  | 'team'
  | 'money'
  | 'pieChart'
  | 'gear'

export interface IIconProps {
  width: number
  height: number
  iconName: IconName
  style?: React.CSSProperties
  className?: string
}
