import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
      createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log( user)
        updateUserProfile(data.name, data.url)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, photo: data.url }
            fetch('http://localhost:5000/student', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  // reset()
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  // navigate('/')
                }
              })
            // console.log('user profile updated')

          })
          .catch(error => console.log(error))

      })
    };

  const validatePassword = (value) => {
    if (value.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value)) {
      return 'Password must contain at least one special character';
    }
    return true;
  };

  return (
    <div>
      <h2 className='text-bold px-5 pt-10'>Registration</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="input input-bordered" placeholder="name"   {...register('name', { required: true })} />
        {errors.name && <span>Name is required</span>}
        </div>
        <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="input input-bordered" placeholder="email"   {...register('email', { required: true })} />
        {errors.email && <span>Email is required</span>}
        </div>
        <div className="form-control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password" 
          className="input input-bordered" 
          {...register('password',  { required: true, validate: validatePassword })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form-control">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          placeholder="confirmPassword" 
          id="confirmPassword"
          className="input input-bordered" 
          {...register('confirmPassword', {
            required: true,
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match'
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>
        <div className="form-control">
        <label htmlFor="photoUrl">Photo URL:</label>
        <input className="input input-bordered"   placeholder="confirphotoUrlmPassword"   type="url" id="photoUrl"  {...register('url')} />
        </div>
        <input type="submit" className='p-10 btn btn-active btn-accent' value="Register" />
      </form>
    </div>
    </div>
  );
};

export default SignUp;

