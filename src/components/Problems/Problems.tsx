import s from './Problems.module.scss'
import { ProblemsProps } from '../../@types'
import cn from 'classnames'
import ProblemItem from '../ProblemItem/ProblemItem.tsx'

const Problems = (props: ProblemsProps) => {
  const { className } = props

  return (
    <article className={cn(s.problems, className)}>
      <h2 className={s.title}>Проблемные зоны</h2>
      <ul className={s.problemList}>
        {new Array(10).fill(null).map((_, i) => (
          <ProblemItem name={'Линейный персонал'} amount={3003670} />
        ))}
      </ul>
    </article>
  )
}

export default Problems
