import { faker } from '@faker-js/faker'

type TransactionType = 'expanses' | 'income' | 'revenue' | 'debt'
type DivisionType = 'B2B' | 'B2C'

interface Transaction {
  division: DivisionType
  date: string
  amount: number
  type: TransactionType
}

const generateRandomTransactions = (
  count: number = 10,
): { data: Transaction[] } => {
  const types: TransactionType[] = ['expanses', 'income', 'revenue', 'debt']
  const divisions: DivisionType[] = ['B2B', 'B2C']

  const data: Transaction[] = Array.from({ length: count }, () => ({
    division: faker.helpers.arrayElement(divisions),
    date: faker.date.recent({ days: 30 }).toISOString(),
    amount: faker.number.int({ min: 5000, max: 50000 }),
    type: faker.helpers.arrayElement(types),
  }))

  return { data }
}

export { generateRandomTransactions }

console.log(generateRandomTransactions(5))
