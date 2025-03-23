import s from './CircleNavigateButton.module.scss'
import IconComponent from '../IconComponent/IconComponent.tsx'
import cn from 'classnames'
import { CircleNavigateButtonProps } from '../../@types'

const CircleNavigateButton = (props: CircleNavigateButtonProps) => {
  const { right, disabled } = props

  return (
    <button
      className={cn(s.button, right && s.button_right)}
      disabled={disabled}
    >
      <IconComponent width={9} height={20} iconName={'buttonArrow'} />
    </button>
  )
}

export default CircleNavigateButton
