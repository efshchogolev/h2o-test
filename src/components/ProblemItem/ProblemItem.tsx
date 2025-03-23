import s from './ProblemItem.module.scss'
import { ProblemItemProps } from '../../@types'
import ExclamationCircle from '../ExclamationCircle/ExclamationCircle.tsx'
import getNormalizedAmount from '../../helpers/getNormalizedAmount.ts'

const ProblemItem = (props: ProblemItemProps) => {
  const { name, amount, important } = props

  return (
    <li className={s.problemItem}>
      <ExclamationCircle color={important ? 'red' : 'yellow'} />
      <div className={s.textContainer}>
        <span className={s.name}>{name}</span>
        <span className={s.amount}>{`₽ ${getNormalizedAmount(amount)}`}</span>
      </div>
    </li>
  )
}

export default ProblemItem
