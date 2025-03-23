import s from './ChartTabs.module.scss'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import cn from 'classnames'
import { ChartTabsProps } from '../../@types'
import IconComponent from '../IconComponent/IconComponent.tsx'
import getNormalizedAmount from '../../helpers/getNormalizedAmount.ts'

const TABS = [
  {
    name: 'results',
    label: 'Итоги',
    amount: 1232123,
    percentage: 10,
    isBad: false,
  },
  {
    name: 'b2b',
    label: 'B2B',
    amount: 1232123,
    percentage: 10,
    isBad: false,
  },
  {
    name: 'b2c',
    label: 'B2C',
    amount: 1232123,
    percentage: 10,
    isBad: true,
  },
]

const ChartTabs = (props: ChartTabsProps) => {
  // const { isBad, percentage, name, amount } = props

  return (
    <TabGroup className={s.tabs}>
      <TabList className={s.tabList}>
        {TABS.map((tab, index) => (
          <Tab
            key={tab.name}
            className={({ selected }) => cn(s.tab, selected && s.tab_active)}
          >
            {({ selected }) => (
              <>
                <div
                  className={cn(
                    s.percentage,
                    tab.isBad ? s.percentage_bad : s.percentage_good,
                    selected && s.percentage_active,
                  )}
                >
                  <IconComponent
                    width={19}
                    height={21}
                    iconName={'arrow'}
                    className={cn(tab.isBad && s.arrowBad)}
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
      <TabPanels>
        <TabPanel></TabPanel>
      </TabPanels>
    </TabGroup>
  )
}

export default ChartTabs
