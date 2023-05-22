import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { TaskList } from './pages/TaskList'
import { VotingCards } from './pages/VotingCards'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskList />} />
        <Route path="/voting/:id" element={<VotingCards />} />
      </Route>
    </Routes>
  )
}
