/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useNavigate } from "react-router-dom"
import { useForm, } from 'react-hook-form';
import PrimaryButton from "../components/Button/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/feature/user/userSlice";
import { useEffect } from "react";

const Login = () => {

  const {isLoading , isError , userToken} = useSelector((state) => state?.auth)

 
  console.log(isLoading , isError  , userToken)

  const dispatch = useDispatch()
  const { register, handleSubmit , errors} = useForm();


  interface LoginFormInputs {
    email: string;
    password: string;
  }

  // const navigate = useNavigate()

  // // redirect authenticated user to profile screen
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/user-profile')
  //   }
  // }, [navigate, userInfo])


  const handleLogin = (data : LoginFormInputs) => {
   dispatch(loginUser({email : data.email , password : data.password}))
  }


return (
  <div className='flex justify-center items-center pt-8'>
    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-900'>
      <div className='mb-8 text-center'>
        <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
        <p className='text-sm text-gray-400'>
          Sign in to access your account
        </p>
      </div>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(handleLogin)}
    
        action=''
        className='space-y-6 ng-untouched ng-pristine ng-valid'
      >
        <div className='space-y-4'>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm'>
              Email address
            </label>
            <input
              name='email'
              {...register("email", { required: "Email is required" })}
              id='email'
            
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
              data-temp-mail-org='0'
            />
            {errors?.email && <p className="text-red-400">{errors?.email ?.message}</p>}

          </div>
          <div>
            <div className='flex justify-between'>
              <label htmlFor='password' className='text-sm mb-2'>
                Password
              </label>
            </div>
            <input
              type='password'
              name='password'
              id='password'
              {...register('password', { required: "password is requied", minLength: { value: 2, message: 'password at least 6 charactars or longer' } })}
            
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
            />
            {errors?.password && <p className="text-red-400">{errors?.password ?.message}</p>}

          </div>
        </div>

        <div>
        
        </div>
        <div>
            <PrimaryButton
              type='submit'
              classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
            >
            Sign in
            </PrimaryButton>
          </div>

     
      </form>
      <div className='space-y-1'>

      </div>
      <div className='flex items-center pt-4 space-x-1'>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        <p className='px-3 text-sm dark:text-gray-400'>
          Login with social accounts
        </p>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
      </div>
      <div className='flex justify-center space-x-4'>
      </div>
      <p className='px-6 text-sm text-center text-gray-400'>
        Don't have an account yet?{' '}
        <Link to='/auth/signup' className='hover:underline text-gray-950 text-lg font-semibold'>
          Sign up
        </Link>
        .
      </p>
    </div>
  </div>
)
}
export default Login