import { useContext } from 'react'
import { type UserAuth, type FormData } from '../../app.types'
import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopUp } from '../../utils/firebase/firebase.utils'
import { InputComponent } from '../input/input.component'
import { UserContext } from '../context/user.context'

export const SignInForm: React.FC = (): JSX.Element => {
  const { setCurrentUser } = useContext(UserContext)

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as FormData
    const authData = { email: formData.email, password: formData.password }

    signInUserWithEmailAndPassword(authData)
      .then(userCredential => {
        const { displayName, email, uid } = userCredential.user
        setCurrentUser({
          displayName,
          email,
          uid
        })
      })
      .catch(err => { console.log(err) })
  }

  const handleGoogleSubmit = (): void => {
    signInWithGooglePopUp()
      .then(userCredential => {
        createUserDocumentFromAuth(userCredential.user as UserAuth)
          .then(userDoc => { console.log(userDoc) })
          .catch(err => { console.log(err) })
      })
      .catch(err => { console.log(err) })
  }

  return (
    <div className="w-[290px]">
        <h1 className='text-2xl font-bold text-center'> I already have an account </h1>
        <h2 className='text-center mt-4 mb-8'> Sign in with your email and password </h2>
        <form onSubmit={handleFormSubmit}>
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
            <button
                type='submit'
                className='w-6/12 h-fit py-4 mt-10 bg-black text-white text-xs font-thin border-[1px] border-black hover:bg-white hover:text-black transition-all duration-500'
            > SIGN IN
            </button>
            <button
              type='button'
              onClick={handleGoogleSubmit}
              className='w-6/12 h-fit py-4 mt-10 bg-[#4285F4] text-white text-xs font-thin border-[1px] border-[#4285F4] hover:bg-[#4285E0] transition-all duration-500'
            > GOOGLE SIGN IN
            </button>
        </form>
    </div>
  )
}
