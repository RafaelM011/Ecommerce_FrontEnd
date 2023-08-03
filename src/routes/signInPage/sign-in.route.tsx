import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

export const SingIn: React.FC = (): JSX.Element => {
  const logGoogleUser = async (): Promise<void> => {
    const { user } = await signInWithGooglePopUp()
    await createUserDocumentFromAuth(user)
  }

  return (
    <div>
        I am the sign in route
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <button onClick={logGoogleUser}> Sign in with google pop-up </button>
    </div>
  )
}
