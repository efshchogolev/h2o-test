import s from './Statistics.module.scss'
import Chart from '../ChartTabs/Chart.tsx'
import { StatisticsProps } from '../../@types'
import cn from 'classnames'

const Statistics = (props: StatisticsProps) => {
  const { className } = props

  return (
    <article className={cn(s.statistics, className)}>
      <Chart percentage={10} name={'asdas'} amount={12312312} />
    </article>
  )
}

export default Statistics
