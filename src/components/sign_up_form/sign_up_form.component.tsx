import { type FormData } from '../../app.types'
// import { createUserAuthWithEmailAndPassword, signInUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

export const SignUpForm: React.FC = (): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as FormData
    const authData = { email: formData.email, password: formData.password }

    console.log(authData)
    // signInUserWithEmailAndPassword(authData)
    //   .then(userCredential => { console.log(userCredential) })
    //   .catch(err => { console.log(err) })

    // createUserAuthWithEmailAndPassword(authData)
    //   .then(userCredential => { console.log(userCredential) })
    //   .catch(err => { console.log(err) })
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
