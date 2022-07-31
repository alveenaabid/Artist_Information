import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './router/routes'
import HomePage from './Pages/Home/HomePage'
import EventsPage from './Pages/Events/EventsPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={routes.HomePage} element={<HomePage />} />

          <Route exact path={routes.EventsPage} element={<EventsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
