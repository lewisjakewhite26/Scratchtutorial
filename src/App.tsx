import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Catalogue } from './pages/Catalogue'
import { Tutorial } from './pages/Tutorial'

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/tutorial/:slug" element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  )
}
