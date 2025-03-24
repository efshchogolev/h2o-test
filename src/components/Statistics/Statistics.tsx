import s from './Statistics.module.scss'
import Chart from '../Chart/Chart.tsx'
import { StatisticsProps } from '../../@types'
import cn from 'classnames'

const Statistics = (props: StatisticsProps) => {
  const { className } = props

  return (
    <article className={cn(s.statistics, className)}>
      <Chart />
    </article>
  )
}

export default Statistics
