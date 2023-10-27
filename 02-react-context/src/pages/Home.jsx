import './home.css'
import SongList from '../components/SongList'
import SongDetail from '../components/SongDetail'
import { SongProvider } from '../context/SongContext'

const Home = () => {
  return (
    <SongProvider>
      <div className='home-container'>
        <div className='izquierdo'>
          <h2>Lista de canciones</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>Detalle de canciones</h2>
          <SongDetail />
        </div>
      </div>
    </SongProvider>
  )
}

export default Home
