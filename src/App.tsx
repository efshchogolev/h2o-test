import './styles/App.scss'
import { generateRandomTransactions } from './faker.ts'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main.tsx'
import Cabinet from './components/Cabinet/Cabinet.tsx'
import Analytics from './components/Analytics/Analytics.tsx'

function App() {
  console.log(generateRandomTransactions())
  return (
    <div className="app">
      <Routes>
        <Route element={<Main />}>
          <Route element={<Cabinet />}>
            <Route path="/" element={<Analytics />} />
            <Route path="timetable" element={<div>timetable</div>} />
            <Route path="reports" element={<div>reports</div>} />
            <Route path="archive" element={<div>archive</div>} />
            <Route path="teams" element={<div>teams</div>} />
            <Route path="money" element={<div>money</div>} />
            <Route path="settings" element={<div>settings</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
