/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm, } from 'react-hook-form';
import PrimaryButton from "../components/Button/PrimaryButton";
import SmallSpinner from "../components/Spiner/SmallSpinner";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/feature/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Signup = () => {

  const navigate = useNavigate()


  const {user} = useAppSelector(state => state?.auth)


  const { register, handleSubmit , errors} = useForm();

  const dispatch = useAppDispatch()
  if(user?.email){
    navigate('/auth/login');
  }


  const handleLogin = (data) => {
    console.log("hello" , data)
    const name = {
      firstName: data.firstName,
      lastName: data.lastName
    };
   
    dispatch(createUser({email : data.email ,name, password : data.password}))

    navigate('/auth/login')
  };

return (
  <div className='flex justify-center items-center pt-8'>
    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-900'>
      <div className='mb-8 text-center'>
        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
        <p className='text-sm text-gray-400'>
          Sign up to access your account
        </p>
      </div>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(handleLogin)}
    
        action=''
        className='space-y-6 ng-untouched ng-pristine ng-valid'
      >
  <div className="space-y-4">
    <div>
      <label htmlFor="email" className="block mb-2 text-sm">
        Email address
      </label>
      <input
        name="email"
        {...register("email", { required: "Email is required" })}
        id="email"
        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
        data-temp-mail-org="0"
      />
      {errors?.email && (
        <p className="text-red-400">{errors?.email?.message}</p>
      )}
    </div>
   
    <div>
      <label htmlFor="firstName" className="block mb-2 text-sm">
        First Name
      </label>
      <input
        name="firstName"
        {...register("firstName", { required: "First Name is required" })}
        id="firstName"
        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
      />
      {errors?.firstName && (
        <p className="text-red-400">{errors?.firstName?.message}</p>
      )}
    </div>
    <div>
      <label htmlFor="lastName" className="block mb-2 text-sm">
        Last Name
      </label>
      <input
        name="lastName"
        {...register("lastName", { required: "Last Name is required" })}
        id="lastName"
        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
      />
      {errors?.lastName && (
        <p className="text-red-400">{errors?.lastName?.message}</p>
      )}
    </div>
    <div>
      <div className="flex justify-between">
        <label htmlFor="password" className="text-sm mb-2">
          Password
        </label>
      </div>
      <input
        type="password"
        name="password"
        id="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 2,
            message: "Password should be at least 6 characters long",
          },
        })}
        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
      />
      {errors?.password && (
        <p className="text-red-400">{errors?.password?.message}</p>
      )}
    </div>
  </div>

  <div>
    <PrimaryButton
      type="submit"
      classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
    >
      Sign up
    </PrimaryButton>
  </div>
</form>

      <div className='space-y-1'>

      </div>
      <div className='flex items-center pt-4 space-x-1'>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        <p className='px-3 text-sm dark:text-gray-400'>
          Signup with social accounts
        </p>
        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
      </div>
      <div className='flex justify-center space-x-4'>
      </div>
      <p className='px-6 text-sm text-center text-gray-400'>
        Don't have an account yet?{' '}
        <Link to='/auth/login' className='hover:underline text-gray-950 text-lg font-semibold'>
          Login
        </Link>
        .
      </p>
    </div>
  </div>
)
}
export default Signup