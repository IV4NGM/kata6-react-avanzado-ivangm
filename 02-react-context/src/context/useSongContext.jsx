import React, { useContext } from 'react'
import { SongContext } from './SongContext'

const useSongContext = () => {
  const context = useContext(SongContext)
  if (!context) {
    throw new Error('useSongContext must be used within a SongProvider')
  }
  return context
}

export default useSongContext
