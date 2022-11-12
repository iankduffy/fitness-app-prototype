
export function LoginForm({}) {
  return (
    <form className="grid gap-5">
      <label className="w-full">
        Email:
        <input className="w-full text-black p-2" type='email'/>
      </label>
      <label>
        Password:
        <input className="w-full p-2" type='email' />
      </label>
      <input type='button' value={'Log in'} className="w-full bg-brand-50 p-2 uppercase" />
    </form>
  )
}