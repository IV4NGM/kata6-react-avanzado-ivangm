import Header from '@/Components/Header'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/Routes/RoutesIndex'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>

  )
}

export default App
