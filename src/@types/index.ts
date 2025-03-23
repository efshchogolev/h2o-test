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
  | 'exclamationMark'

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

export type ProblemsProps = {
  className?: string
}

export type ProblemItemProps = {
  name: string
  amount: number
  important?: boolean
}

export type ExclamationCircleProps = {
  color: 'yellow' | 'green' | 'red' | 'purple' | 'darkBlue' | 'blue'
  markHidden?: boolean
  className?: string
}
