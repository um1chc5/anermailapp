import { useContext, useEffect } from 'react'
import logoImage from '../../images/connect-logo-black.svg'
import { MailContext } from '../../context/MailAppProvider'
import { useForm } from 'react-hook-form'

interface SubmitDataInterface {
  email: string
  password: string
}

function Login() {
  const { lsData, setLsData, user } = useContext(MailContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue
  } = useForm<SubmitDataInterface>()

  useEffect(() => {
    if (user && user.password) {
      setValue('password', user.password)
    }
  }, [user])

  console.log('errors: ', errors)

  const onSubmit = (data: SubmitDataInterface) => {
    // console.log(data)
    if (data.password === '') {
      setError('password', { message: 'Password is required' })
      return
    }

    if (data.password !== user.password) {
      setError('password', { message: 'Password is incorrect' })
      return
    }

    if (data.email === user.email) {
      setLsData({ ...lsData, isLogin: true })
    }
  }

  return (
    <div className='flex h-screen items-center justify-center bg-navy-darker'>
      <div className='w-[480px] rounded-md bg-white px-8 py-16'>
        <form className='flex  flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3 flex justify-center'>
            <img src={logoImage} alt='logo' className='w-[220px]' />
          </div>
          <h2 className='text-center text-xl font-light'>Login to check your email!!</h2>
          <label className='mb-2 text-xl' htmlFor='email'>
            Email
          </label>
          <select
            className='rounded-md border border-navy-darker px-3 py-2 shadow-md'
            {...register('email', { required: true, validate: (value) => value !== '' })}
          >
            <option value=''>------Choose an email</option>
            <option value={user.email}>{user.email}</option>
          </select>
          <p className='mb-1 h-[24px] text-logout-red'>{errors.email && 'Please select an email'}</p>
          <label className='mb-2 text-xl' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            defaultValue={user.password}
            {...register('password', { required: 'Password is required' })}
            className='rounded-md border border-navy-darker px-3 py-2 shadow-md'
          />
          <p className='mb-1 h-[24px] text-logout-red'>{errors.password?.message}</p>
          <button className='mt-2 rounded-md bg-navy-dark py-2 text-white shadow-md'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
