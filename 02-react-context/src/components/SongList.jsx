import React, { useEffect, useState } from 'react'
import canciones from '../assets/listaCanciones.json'
import './songlist.css'

const SongList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='row-container'>
      {
        loading
          ? <h2>Cargando</h2>
          : list.map((song) => {
            return (
              <div className='row-song' key={song.id}>
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
