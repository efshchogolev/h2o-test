import s from './Chart.module.scss'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import cn from 'classnames'
import IconComponent from '../IconComponent/IconComponent.tsx'
import getNormalizedAmount from '../../helpers/getNormalizedAmount.ts'
import {
  CartesianGrid,
  Legend,
  LegendProps,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { generateRandomTransactions } from '../../faker.ts'
import {
  DivisionType,
  SimpleTab,
  Transaction,
  TransactionType,
  TransformedTransaction,
} from '../../@types'
import AmountItem from '../ProblemItem/AmountItem.tsx'
import Tabs from '../Tabs/Tabs.tsx'

const TRANSLATIONS = {
  revenue: 'Выручка',
  expanses: 'Затраты',
  income: 'Прибыль',
  debt: 'Задолженность',
  total: 'Итог',
}

const CustomLegend = (
  props: LegendProps & {
    data: TransformedTransaction[] | Omit<TransformedTransaction, 'division'>[]
  },
) => {
  const { payload, data } = props
  console.log(props)
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

const data = generateRandomTransactions()

const getSpecificDivisionData = (
  data: TransformedTransaction[],
  division: DivisionType,
) => {
  return data.filter((el) => el.division === division)
}

const getSpecificTypeAmount = (
  data: TransformedTransaction[] | Omit<TransformedTransaction, 'division'>[],
  type: TransactionType | 'total',
) => {
  return data.reduce((acc, el) => acc + el[type], 0)
}

const getFullAmount = (data: TransformedTransaction[]) =>
  data.reduce((acc, el) => acc + el.total, 0)

const transformTransactions = (
  data: Transaction[],
): TransformedTransaction[] => {
  const resultMap = new Map<string, TransformedTransaction>()

  data.forEach(({ division, date, amount, type }) => {
    const month = date.slice(0, 7)
    const key = `${division}-${month}`

    if (!resultMap.has(key)) {
      resultMap.set(key, {
        division,
        month,
        expanses: 0,
        income: 0,
        revenue: 0,
        debt: 0,
        total: 0,
      })
    }

    const entry = resultMap.get(key)!
    const amountNumber = Number(amount)
    entry[type] += amountNumber
    entry.total += amountNumber
  })

  return Array.from(resultMap.values()).sort((a, b) =>
    a.month.localeCompare(b.month),
  )
}

const mergeDivisions = (
  transactions: TransformedTransaction[],
): Omit<TransformedTransaction, 'division'>[] => {
  const resultMap = new Map<string, Omit<TransformedTransaction, 'division'>>()

  transactions.forEach(({ month, expanses, income, revenue, debt, total }) => {
    if (!resultMap.has(month)) {
      resultMap.set(month, {
        month,
        expanses: 0,
        income: 0,
        revenue: 0,
        debt: 0,
        total: 0,
      })
    }

    const entry = resultMap.get(month)!
    entry.expanses += expanses
    entry.income += income
    entry.revenue += revenue
    entry.debt += debt
    entry.total += total
  })

  return Array.from(resultMap.values()).sort((a, b) =>
    a.month.localeCompare(b.month),
  )
}
const transformedData = transformTransactions(data)

const mergedData = mergeDivisions(transformTransactions(data))
const b2cData = getSpecificDivisionData(transformedData, 'B2C')
const b2bData = getSpecificDivisionData(transformedData, 'B2B')

console.log(mergeDivisions(transformTransactions(data)))

const PERIOD_TABS: SimpleTab[] = [
  {
    name: 'week',
    label: 'Неделя',
  },
  {
    name: 'month',
    label: 'Месяц',
  },
  {
    name: 'year',
    label: 'Год',
  },
]

const TABS = [
  {
    name: 'results',
    label: 'Итоги',
    amount: getFullAmount(transformedData),
    percentage: 10,
    data: mergedData,
  },
  {
    name: 'b2b',
    label: 'B2B',
    amount: getFullAmount(getSpecificDivisionData(transformedData, 'B2B')),
    percentage: 10,
    data: b2bData,
  },
  {
    name: 'b2c',
    label: 'B2C',
    amount: getFullAmount(getSpecificDivisionData(transformedData, 'B2C')),
    percentage: -10,
    data: b2cData,
  },
]

const Chart = () => {
  return (
    <TabGroup className={s.tabs}>
      <TabList className={s.tabList}>
        {TABS.map((tab) => (
          <Tab
            key={`${tab.name}-tab`}
            className={({ selected }) => cn(s.tab, selected && s.tab_active)}
          >
            {({ selected }) => (
              <>
                <div
                  className={cn(
                    s.percentage,
                    tab.percentage < 0 ? s.percentage_bad : s.percentage_good,
                    selected && s.percentage_active,
                  )}
                >
                  <IconComponent
                    width={19}
                    height={21}
                    iconName={'arrow'}
                    className={cn(tab.percentage < 0 && s.arrowBad)}
                  />
                  <span
                    className={s.percentageText}
                  >{`${tab.percentage} %`}</span>
                </div>
                <span
                  className={cn(s.amount, selected && s.amount_active)}
                >{`₽  ${getNormalizedAmount(tab.amount)}`}</span>
                <span className={cn(s.name, selected && s.name_active)}>
                  {tab.label}
                </span>
              </>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels className={s.tabPanelsList}>
        <header className={s.header}>
          <h2>Общая статистика</h2>
          <Tabs tabs={PERIOD_TABS} withoutBottomBorder />
        </header>
        {TABS.map((tab) => (
          <TabPanel className={s.tabPanel} key={tab.name}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                key={`${tab.name}-chart`}
                data={tab.data}
                margin={{
                  top: 24,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="0" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  stroke="#B7B7B7"
                  className={s.tick}
                  tickFormatter={(date) => {
                    return new Date(date).toLocaleString('default', {
                      month: 'short',
                    })
                  }}
                />
                <YAxis
                  stroke="#B7B7B7"
                  axisLine={false}
                  tickLine={false}
                  width={3}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#ac74fc"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="expanses"
                  stroke="#30c7dc"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#73cf7a"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#45aaf2"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="debt"
                  stroke="#f7b731"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 5 }}
                />
                <Legend content={<CustomLegend data={tab.data} />} />
              </LineChart>
            </ResponsiveContainer>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default Chart
