import s from './CustomLegend.module.scss'
import { LegendProps } from 'recharts'
import { TransformedTransaction } from '../../@types'
import AmountItem from '../ProblemItem/AmountItem.tsx'
import { TRANSLATIONS } from '../../constants.ts'
import { getSpecificTypeAmount } from '../../helpers/chartHelpers.ts'

const CustomLegend = (
  props: LegendProps & {
    data: TransformedTransaction[] | Omit<TransformedTransaction, 'division'>[]
  },
) => {
  const { payload, data } = props
  return (
    <ul className={s.legend}>
      {payload?.map((entry) => {
        if (entry.dataKey && entry.color) {
          const key = entry.dataKey as keyof typeof TRANSLATIONS
          return (
            <AmountItem
              key={key}
              name={TRANSLATIONS[key]}
              amount={getSpecificTypeAmount(data, key)}
              color={entry.color}
            />
          )
        }
      })}
    </ul>
  )
}

export default CustomLegend
