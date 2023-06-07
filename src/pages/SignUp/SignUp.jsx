import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

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
        const logedUser = result.user;
        console.log(logedUser)
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email }
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
                  // Swal.fire({
                  //   position: 'top-end',
                  //   icon: 'success',
                  //   title: 'User created',
                  //   showConfirmButton: false,
                  //   timer: 1500
                  // })
                  navigate('/')
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
      <h2>Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span>Name is required</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span>Email is required</span>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: true, validate: validatePassword })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: true,
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match'
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

        <label htmlFor="photoUrl">Photo URL:</label>
        <input type="text" id="photoUrl" placeholder='photo url' {...register('photoURL')} />

        <input type="submit" className='p-10' value="Register" />
      </form>
    </div>
  );
};

export default SignUp;

