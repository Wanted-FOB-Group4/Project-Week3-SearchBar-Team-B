import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'
import SearchPage from './SearchPage'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<SearchPage />} />
      </Route>
    </Routes>
  )
}

export default App
