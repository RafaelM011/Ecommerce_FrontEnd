import { SignInForm } from '../../components/sign_forms/sign_in_form.component'
import { SignUpForm } from '../../components/sign_forms/sign_up_form.component'

const SignIn: React.FC = (): JSX.Element => {
  return (
    <div className="w-11/12 mx-auto h-fit flex flex-wrap justify-center lg:gap-[200px] gap-[50px]">
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default SignIn
