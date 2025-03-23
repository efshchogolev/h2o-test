import s from './Analytics.module.scss'
import Problems from '../Problems/Problems.tsx'

const Analytics = () => {
  return (
    <main className={s.analytics}>
      <h1 className={s.title}>Сводный отчёт</h1>
      <section className={s.horizontalGrid}>
        <article></article>
        <Problems className={s.problems} />
      </section>
    </main>
  )
}

export default Analytics
