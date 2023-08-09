import { updateProfile } from 'firebase/auth'
import { type FormData } from '../../app.types'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { InputComponent } from '../input/input.component'

export const SignUpForm: React.FC = (): JSX.Element => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as FormData
    const authData = { email: formData.email, password: formData.password }

    if (formData.password !== formData.confirmPassword) {
      console.log('Password does not match')
      return
    }

    createAuthUserWithEmailAndPassword(authData)
      .then(authUser => {
        updateProfile(authUser.user, {
          displayName: formData.displayName
        })
          // .then()
          .catch(err => { console.log(err) })
      })
      .catch(err => { console.log(err) })
  }

  return (
    <div className="w-[290px]">
      <h1 className='text-2xl font-bold text-center'> I do not have an account </h1>
      <h2 className='text-center mt-4 mb-8'> Sign up with your email and password </h2>
      <form onSubmit={handleFormSubmit}>
        <InputComponent
          className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
          name="displayName"
          type="text"
          placeholder="Display Name"
          required/>
        <br/>
        <InputComponent
          className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
          name="email"
          type="email"
          placeholder="Email"
          required/>
        <br/>
        <InputComponent
          className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
          name="password"
          type="password"
          placeholder="Password"
          required/>
        <br/>
        <InputComponent
          className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required/>
        <br/>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-6/12 h-fit py-4 mt-10 bg-black text-white text-xs font-thin border-[1px] border-black hover:bg-white hover:text-black transition-all duration-500'
          >
          SIGN UP
          </button>
        </div>
      </form>
    </div>
  )
}
