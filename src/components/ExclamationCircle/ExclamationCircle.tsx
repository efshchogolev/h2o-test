import s from './ExclamationCircle.module.scss'
import { ExclamationCircleProps } from '../../@types'
import cn from 'classnames'
import IconComponent from '../IconComponent/IconComponent.tsx'

const ExclamationCircle = (props: ExclamationCircleProps) => {
  const { markHidden, color, className } = props

  return (
    <div className={cn(s.circle, className)} style={{ backgroundColor: color }}>
      {!markHidden && (
        <IconComponent width={4} height={11} iconName={'exclamationMark'} />
      )}
    </div>
  )
}

export default ExclamationCircle
