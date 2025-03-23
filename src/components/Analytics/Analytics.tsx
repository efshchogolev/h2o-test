import s from './Analytics.module.scss'
import Problems from '../Problems/Problems.tsx'
import Statistics from '../Statistics/Statistics.tsx'

const Analytics = () => {
  return (
    <main className={s.analytics}>
      <h1 className={s.title}>Сводный отчёт</h1>
      <section className={s.horizontalGrid}>
        <Statistics className={s.statistics} />
        <Problems className={s.problems} />
      </section>
    </main>
  )
}

export default Analytics
