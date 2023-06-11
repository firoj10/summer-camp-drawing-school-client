
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
        
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <h2>Login Form</h2>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">email</span>
                    </label>
                    <input type="email" id="email" className="input input-bordered"  placeholder="email" {...register('email', { required: true })} />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        {...register('password', { required: true })}
                        className="input input-bordered" 
                        placeholder="password"
                    />
                    {showPassword ? (
                        <RiEyeOffLine className='' onClick={togglePasswordVisibility} />
                    ) : (
                        <RiEyeLine onClick={togglePasswordVisibility} />
                    )}

                </div>
                {errors.password && <span>Password is required</span>}

                <p>create a new user<Link to='/signup'>Signup</Link></p>

                <input type="submit" value="Login" />
                <SocialLogin></SocialLogin>
            </form>
            </div>

</div>
    );
};




export default Login;
