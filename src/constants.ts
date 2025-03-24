import { SimpleTab } from './@types'

const TRANSLATIONS = {
  revenue: 'Выручка',
  expanses: 'Затраты',
  income: 'Прибыль',
  debt: 'Задолженность',
  total: 'Итог',
}

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

export { PERIOD_TABS, TRANSLATIONS }
