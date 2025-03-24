import s from './Problems.module.scss'
import { ProblemsProps } from '../../@types'
import cn from 'classnames'
import AmountItem from '../ProblemItem/AmountItem.tsx'
import { generateRandomProblems } from '../../faker.ts'

const problemsData = generateRandomProblems(20)

const Problems = (props: ProblemsProps) => {
  const { className } = props

  const getMarkColor = (amount: number) => {
    return amount > 50000 ? '#fc5c65' : '#f7b731'
  }

  return (
    <article className={cn(s.problems, className)}>
      <h2 className={s.title}>Проблемные зоны</h2>
      <ul className={s.problemList}>
        {problemsData.map((el) => (
          <AmountItem
            key={el.id}
            name={el.category}
            amount={el.amount}
            color={getMarkColor(el.amount)}
          />
        ))}
      </ul>
    </article>
  )
}

export default Problems
