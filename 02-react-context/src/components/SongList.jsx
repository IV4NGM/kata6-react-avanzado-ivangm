import './songlist.css'
import useSongContext from '../context/useSongContext'

const SongList = () => {
  const { list, loading, setSelectedSong } = useSongContext()
  return (
    <div className='row-container'>
      {
        loading
          ? <h2>Cargando</h2>
          : list.map((song) => {
            return (
              <div className='row-song' key={song.id} onClick={() => setSelectedSong(song)}>
                <h4>
                  {song.title}
                </h4>
                <p>{song.artist}</p>
              </div>
            )
          })
      }
    </div>
  )
}

export default SongList
