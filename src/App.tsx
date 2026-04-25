// src/App.tsx
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import routes from './routes'

function AppRoutes() {
  return useRoutes(routes)
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
