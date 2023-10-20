import React from 'react'

function Header({ title, funcion }) {
  funcion()
  return (
    <div>Mi título es: {title}</div>
  )
}

export default Header