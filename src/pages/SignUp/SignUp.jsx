import React, { useContext } from 'react';
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
        console.log(data.name, data.email, data.password, data.photoUrl);
        createUser(data.email, data.password ,data.photoURL)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        alert('user profile info updated')
                        reset();
                     
                        navigate('/');

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
