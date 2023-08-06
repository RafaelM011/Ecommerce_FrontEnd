import { type FormData, type UserAuth } from '../../app.types'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

export const SignUpForm: React.FC = (): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as FormData
    const authData = { email: formData.email, password: formData.password }

    if (formData.password !== formData.confirmPassword) {
      console.log('Password does not match')
      return
    }

    createAuthUserWithEmailAndPassword(authData)
      .then(userCredential => {
        const userAuth = {
          ...userCredential.user,
          displayName: formData.displayName
        }
        createUserDocumentFromAuth(userAuth as UserAuth)
          .then(userDoc => { console.log(userDoc) })
          .catch(err => { console.log(err) })
      })
      .catch(err => { console.log(err) })
  }

  return (
    <div>
        <h1> Sign up with your email and password </h1>
        <form onSubmit={handleSubmit}>
            <label> Display Name </label>
            <input name='displayName' type='text' required/>
                {/*  */}
            <label> Email </label>
            <input name='email' type='email' required/>
                {/*  */}
            <label> Password </label>
            <input name='password' type='password' required/>
                {/*  */}
            <label> Confirm Password </label>
            <input name='confirmPassword' type='password' required/>
                {/*  */}
            <button type="submit"> Sign Up </button>
        </form>
    </div>
  )
}
