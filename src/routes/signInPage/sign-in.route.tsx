// import { type UserAuth } from '../../app.types'
import { SignUpForm } from '../../components/sign_up_form/sign_up_form.component'
// import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

export const SingIn: React.FC = (): JSX.Element => {
  // const logGoogleUser = async (): Promise<void> => {
  //   const { user } = await signInWithGooglePopUp()
  //   const userDocRef = await createUserDocumentFromAuth(user as UserAuth)
  //   console.log(userDocRef)
  // }

  return (
    <div>
      <SignUpForm/>
    </div>
  )
}
