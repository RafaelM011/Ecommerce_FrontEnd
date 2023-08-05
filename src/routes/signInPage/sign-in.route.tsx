import { InputComponent } from '../../components/input/input.component'

const SignIn: React.FC = (): JSX.Element => {
  return (
    <div className="w-11/12 mx-auto h-fit flex flex-wrap justify-center lg:gap-[200px] gap-[50px]">
        <div className="w-[290px]">
          <h1 className='text-2xl font-bold text-center'> I already have an account </h1>
          <h2 className='text-center mt-4 mb-8'> Sign in with your email and password </h2>
          <InputComponent
            className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
            name="email"
            type="email"
            placeholder="Email"
            required/>
          <br/>
          <InputComponent
            className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
            name="passwod"
            type="pasword"
            placeholder="Password"
            required/>
          <br/>
          <button className='w-6/12 h-fit py-4 mt-10 bg-black text-white text-xs font-thin border-[1px] border-black hover:bg-white hover:text-black transition-all duration-500'> SIGN IN </button>
          <button className='w-6/12 h-fit py-4 mt-10 bg-[#4285F4] text-white text-xs font-thin border-[1px] border-[#4285F4] hover:bg-[#4285E0] transition-all duration-500'> GOOGLE SIGN IN </button>
        </div>
        <div className="w-[290px]">
          <h1 className='text-2xl font-bold text-center'> I do not have an account </h1>
          <h2 className='text-center mt-4 mb-8'> Sign up with your email and password </h2>
          <InputComponent
            className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
            name="displaName"
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
            name="passwod"
            type="pasword"
            placeholder="Password"
            required/>
          <br/>
          <InputComponent
            className="w-full px-1 font-medium placeholder:font-thin border-b-[1px] border-black my-4"
            name="confirPassword"
            type="password"
            placeholder="Confirm Password"
            required/>
          <br/>
          <div className='flex justify-center'>
          <button
            className='w-6/12 h-fit py-4 mt-10 bg-black text-white text-xs font-thin border-[1px] border-black hover:bg-white hover:text-black transition-all duration-500'
          >
          SIGN UP
          </button>
          </div>
        </div>
    </div>
  )
}

export default SignIn
