import logo from '../../assets/react.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ReactHookForm = () => {
  // API: https://dummyjson.com/docs/users
  //Creación del esquema del formulario de usuario utilizando YUP para validar nuestro formulario o nuestros campos
  const userFormSchema = yup.object({
    firstName: yup.string().required('Escribe tu nombre'),
    lastName: yup.string().required('Escribe tu apellido'),
    age: yup.number().positive('La edad debe ser un número positivo').integer('La edad debe ser un número entero'),
    gender: yup.mixed().oneOf(['M', 'F', 'O'], 'Selecciona un género').defined(),
    email: yup.string().required('Ingresa un email válido').email('Debes ingresar un email válido'),
    password: yup.string().required('No ingresaste una contraseña').min(5, 'La contraseña debe tener al menos 5 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'La contraseña debe tener al menos 5 caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial')
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    // Resolver sirve para establecer el esquema de validación, para ello usamos la función yupResolver y le pasamos como argumento nuestro schema userFormSchema
    resolver: yupResolver(userFormSchema)
  })

  const onSubmit = data => console.log(data)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
        
          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName', {required: true, maxLength: 20})}
          />
          <p>{errors.firstName?.message}</p>

          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName', {pattern: /^[A-Za-z]+$/i })}
          />
          <p>{errors.lastName?.message}</p>

          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age')}
          />
          <p>{errors.age?.message}</p>

          <label htmlFor='gender'>Genero</label>
          <select name='gender' id='gender' {...register('gender')}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          <p>{errors.gender?.message}</p>

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm