import { faker } from '@faker-js/faker'
import { DivisionType, Expense, Transaction, TransactionType } from './@types'

const generateRandomTransactions = (count: number = 40): Transaction[] => {
  const types: TransactionType[] = ['expanses', 'income', 'revenue', 'debt']
  const divisions: DivisionType[] = ['B2B', 'B2C']

  const today = new Date()
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(today.getFullYear() - 1)

  return Array.from({ length: count }, () => ({
    division: faker.helpers.arrayElement(divisions),
    date: faker.date.between({ from: oneYearAgo, to: today }).toISOString(),
    amount: faker.number.int({ min: 5000, max: 50000 }),
    type: faker.helpers.arrayElement(types),
  })).sort((a, b) => a.date.localeCompare(b.date))
}

const categories = [
  'Линейный персонал',
  'Подразделение разовых работ ФОТ',
  'Бензин (наличные)',
  'Закупка инвентаря',
  'Закупка спецодежды/СИЗ',
  'Ремонт оборудования',
  'Обслуживание автомобиля',
  'Форс-мажоры',
  'Рекламные бюджеты (Блогеры)',
  'Рекламные бюджеты (Контекст)',
]

const generateRandomProblems = (count: number): Expense[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    category: faker.helpers.arrayElement(categories),
    amount: faker.number.int({ min: 10000, max: 300000 }),
  }))
}

export { generateRandomTransactions, generateRandomProblems }
