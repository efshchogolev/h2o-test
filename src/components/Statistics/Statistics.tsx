import s from './Statistics.module.scss'
import ChartTabs from '../ChartTabs/ChartTabs.tsx'
import { StatisticsProps } from '../../@types'
import cn from 'classnames'

const Statistics = (props: StatisticsProps) => {
  const { className } = props

  return (
    <article className={cn(s.statistics, className)}>
      <ChartTabs percentage={10} name={'asdas'} amount={12312312} />
    </article>
  )
}

export default Statistics
