import { registerUserService } from '@/Services/useServices'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        navigate('/login')
        console.log('Usuario creado correctamente')
      }
    } catch (error) {
      console.log('Ocurrió un error al registrarse', error)
    }
  }
  return (
    <div>Signup</div>
  )
}

export default Signup
