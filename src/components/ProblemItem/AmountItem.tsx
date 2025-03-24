import s from './AmountItem.module.scss'
import { ProblemItemProps } from '../../@types'
import ExclamationCircle from '../ExclamationCircle/ExclamationCircle.tsx'
import getNormalizedAmount from '../../helpers/getNormalizedAmount.ts'

const AmountItem = (props: ProblemItemProps) => {
  const { name, amount, color } = props

  return (
    <li className={s.problemItem}>
      <ExclamationCircle color={color} />
      <div className={s.textContainer}>
        <span className={s.name}>{name}</span>
        <span className={s.amount}>{`₽ ${getNormalizedAmount(amount)}`}</span>
      </div>
    </li>
  )
}

export default AmountItem
