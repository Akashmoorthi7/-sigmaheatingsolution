// src/routes.tsx
import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Contact from './pages/Contact'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/industries', element: <Industries /> },
  { path: '/contact', element: <Contact /> },
]

export default routes
