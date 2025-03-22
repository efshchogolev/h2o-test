import { Tab, TabGroup, TabList } from '@headlessui/react'
import s from './Tabs.module.scss'

const TABS = [
  {
    name: 'employee',
    label: 'Свод данных по сотрудникам',
  },
  {
    name: 'company',
    label: 'Сводный отчет внутри компании',
  },
  {
    name: 'deals',
    label: 'Сводный отчет по сделкам',
  },
]

const Tabs = () => {
  return (
    <TabGroup className={s.group}>
      <TabList className={s.list}>
        {TABS.map((tab) => (
          <Tab key={tab.name} className={s.tab}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  )
}

export default Tabs
