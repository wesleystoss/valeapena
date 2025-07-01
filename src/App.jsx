import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import CompanyPage from './pages/CompanyPage'
import Login from './pages/Login'
import Register from './pages/Register'
import CompanyDashboard from './pages/CompanyDashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/dashboard" element={<CompanyDashboard user={user} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 