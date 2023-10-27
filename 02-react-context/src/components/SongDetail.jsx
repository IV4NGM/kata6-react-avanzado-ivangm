import useSongContext from '../context/useSongContext'

const SongDetail = () => {
  const { selectedSong } = useSongContext()
  return (
    <>
      {selectedSong.title
        ? (
          <div>
            <h4>{selectedSong.title}</h4>
            <p>{selectedSong.artist}</p>
            <p>{selectedSong.year}</p>
            <img src={selectedSong.img_url} alt='Cover' />
          </div>
          )
        : (
          <div>
            <h3>No hay una canción seleccionada.</h3>
          </div>
          )}
    </>

  )
}

export default SongDetail
