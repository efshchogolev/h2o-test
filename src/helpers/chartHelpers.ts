import {
  DivisionType,
  Transaction,
  TransactionType,
  TransformedTransaction,
} from '../@types'

const getSpecificTypeAmount = (
  data: TransformedTransaction[] | Omit<TransformedTransaction, 'division'>[],
  type: TransactionType | 'total',
) => {
  return data.reduce((acc, el) => acc + el[type], 0)
}

const getSpecificDivisionData = (
  data: TransformedTransaction[],
  division: DivisionType,
) => {
  return data.filter((el) => el.division === division)
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

export {
  getSpecificTypeAmount,
  getSpecificDivisionData,
  getFullAmount,
  transformTransactions,
  mergeDivisions,
}
