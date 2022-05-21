import Layout from 'components/layout'
import { Route, Routes } from 'react-router-dom'
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
