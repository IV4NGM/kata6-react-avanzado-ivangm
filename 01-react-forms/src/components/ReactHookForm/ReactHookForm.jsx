// import logo from '../assets/react.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ReactHookForm = () => {
  // API: https://dummyjson.com/docs/users
  //Creación del esquema del formulario de usuario utilizando YUP para validar nuestro formulario o nuestros campos
  // const userFormSchema = yup.object({
  //   firstName: yup.string(),
  //   lastName: yup.string(),
  //   age: yup.number(),
  //   gender: ,
  //   email: ,
  //   password:
  // }.required())


  return (
    <div className='login'>
      <div className='login-container'>
        {/* <img src={logo} alt='logo' /> */}
        <form
          onSubmit={() => { }/* HANDLE SUBMIT */}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
        
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
          />

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
          />

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
          />

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender'>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
          />

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm