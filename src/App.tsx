import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SkipLink } from './components/SkipLink'
import { Home } from './pages/Home'
import { Catalogue } from './pages/Catalogue'
import { Tutorial } from './pages/Tutorial'
import { TutorialPrint } from './pages/TutorialPrint'

export function App() {
  return (
    <BrowserRouter>
      <SkipLink />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/tutorial/:slug" element={<Tutorial />} />
        <Route path="/tutorial/:slug/print" element={<TutorialPrint />} />
      </Routes>
    </BrowserRouter>
  )
}
