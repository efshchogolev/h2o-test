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
  | 'buttonArrow'
  | 'dropdownArrow'
  | 'exclamationMark'
  | 'arrow'

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
  color: string
}

export type ExclamationCircleProps = {
  color: string
  markHidden?: boolean
  className?: string
}

export type StatisticsProps = {
  className?: string
}

export type TransactionType = 'expanses' | 'income' | 'revenue' | 'debt'
export type DivisionType = 'B2B' | 'B2C'

export interface Transaction {
  division: DivisionType
  date: string
  amount: number
  type: TransactionType
}

export type TransformedTransaction = {
  division: DivisionType
  month: string
  expanses: number
  income: number
  revenue: number
  debt: number
  total: number
}

export type Expense = {
  id: number
  category: string
  amount: number
}

export type SimpleTab = {
  name: string
  label: string
}

export type TabsProps = {
  tabs: SimpleTab[]
  withoutBottomBorder?: boolean
}
