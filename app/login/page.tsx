import { LoginForm } from 'components/login/login-form'

export default function Login() { 
  return (
    <div className="bg-brand-600 h-screen flex justify-center flex-col px-5 text-white">
      <h1 className="text-white text-4xl text-center uppercase">Fitness App</h1>
      <p className="text-white text-2xl text-center">Log in</p>
      <LoginForm />
    </div>
  )
}