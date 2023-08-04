interface FormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export const SignUpForm: React.FC = (): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as FormData
    console.log(formData)
  }

  return (
    <div>
        <h1> Sign up with your email and password </h1>
        <form onSubmit={handleSubmit}>
            <label> Display Name </label>
            <input name='username' type='text' required/>
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
