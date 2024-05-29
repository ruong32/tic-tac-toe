import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game } from '@/pages'
import { MainLayout } from './layout'

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
