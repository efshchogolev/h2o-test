import s from './Chart.module.scss'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import cn from 'classnames'
import IconComponent from '../IconComponent/IconComponent.tsx'
import getNormalizedAmount from '../../helpers/getNormalizedAmount.ts'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { generateRandomTransactions, getRandomPercentage } from '../../faker.ts'
import Tabs from '../Tabs/Tabs.tsx'
import { PERIOD_TABS } from '../../constants.ts'
import {
  getFullAmount,
  getSpecificDivisionData,
  mergeDivisions,
  transformTransactions,
} from '../../helpers/chartHelpers.ts'
import CustomLegend from '../CustomLegend/CustomLegend.tsx'
import CustomChartTooltip from '../CustomChartTooltip/CustomChartTooltip.tsx'

const data = generateRandomTransactions()
const transformedData = transformTransactions(data)

const mergedData = mergeDivisions(transformTransactions(data))
const b2cData = getSpecificDivisionData(transformedData, 'B2C')
const b2bData = getSpecificDivisionData(transformedData, 'B2B')

const tabs = [
  {
    name: 'results',
    label: 'Итоги',
    amount: getFullAmount(transformedData),
    percentage: getRandomPercentage(),
    data: mergedData,
  },
  {
    name: 'b2b',
    label: 'B2B',
    amount: getFullAmount(getSpecificDivisionData(transformedData, 'B2B')),
    percentage: getRandomPercentage(),
    data: b2bData,
  },
  {
    name: 'b2c',
    label: 'B2C',
    amount: getFullAmount(getSpecificDivisionData(transformedData, 'B2C')),
    percentage: getRandomPercentage(),
    data: b2cData,
  },
]

const Chart = () => {
  return (
    <TabGroup className={s.tabs}>
      <TabList className={s.tabList}>
        {tabs.map((tab) => (
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
        {tabs.map((tab) => (
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
                  stroke="#989fa3"
                  className={s.tick}
                  tickFormatter={(date) => {
                    return new Date(date).toLocaleString('default', {
                      month: 'short',
                    })
                  }}
                />
                <YAxis
                  stroke="#989fa3"
                  axisLine={false}
                  tickLine={false}
                  width={3}
                />
                <Tooltip content={<CustomChartTooltip />} />
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
