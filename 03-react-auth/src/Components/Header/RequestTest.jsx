// const request = new XMLHttpRequest()

import { useEffect } from "react"

// const exito = (response) => {
//   const datos = JSON.parse(response)
//   console.log(datos)
// }

// const fallo = (err) => {
//   console.log('La petición ha fallado', err)
// }

// // Función para éxito
// request.onload = exito

// // Función para fallo
// request.onerror = fallo

// // URL a la que se va a realizar la solicitud HTTP
// request.open('GET', 'https://api.github.com/users/octocat')

// request.send()

const RequestTest = () => {
  useEffect(() => {
    fetch('https://ecommerce-json-jwt.onrender.com/items')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>RequestTest</div>
  )
}

export default RequestTest
