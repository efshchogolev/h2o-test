import { Tab, TabGroup, TabList } from '@headlessui/react'
import s from './Tabs.module.scss'
import { TabsProps } from '../../@types'
import cn from 'classnames'

const Tabs = (props: TabsProps) => {
  const { tabs, withoutBottomBorder } = props
  return (
    <TabGroup className={s.group}>
      <TabList
        className={cn(s.list, withoutBottomBorder && s.list_withoutBorder)}
      >
        {tabs.map((tab) => (
          <Tab key={tab.name} className={s.tab}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  )
}

export default Tabs
