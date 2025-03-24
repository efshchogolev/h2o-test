import s from './CustomChartTooltip.module.scss'
import { TooltipProps } from 'recharts'
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'
import { TRANSLATIONS } from '../../constants.ts'
import { CSSProperties } from 'react'

const CustomChartTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload) {
    console.log(payload)
    return (
      <ul className={s.tooltip}>
        {payload.map((line) => {
          const key = line.dataKey as keyof typeof TRANSLATIONS
          return (
            <li
              className={s.tooltipContainer}
              style={{ '--marker-color': line.color } as CSSProperties}
            >
              <span className={s.tooltipText}>
                {TRANSLATIONS[key]}: {line.value}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }

  return null
}

export default CustomChartTooltip
