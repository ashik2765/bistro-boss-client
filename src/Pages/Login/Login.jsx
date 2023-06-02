import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const Login = () => {


    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    const handlesubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title:'Custom animation with animate.css',
                    showClass:{
                        popup:'animate_animate_fadeInDown'
                    },
                    hideClass:{
                        popup: 'animate_animated animate_fadeOutUp'
                    }
                })
                navigate(from,{replace:true});
            })

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white w-full max-w-md p-8 rounded shadow">
                    <h2 className="text-3xl text-center font-bold mb-6">Login</h2>
                    <form onSubmit={handlesubmit} >
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Enter your password" />
                        </div>
                        {/* <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input className="mr-2 leading-tight" type="checkbox" id="rememberMe" />
                            <label className="text-sm text-gray-700" htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>
                        <a className="text-sm text-blue-500 hover:text-blue-700" href="#">Forgot Password?</a>
                    </div> */}

                        {/* Recaptcha */}
                        {/* <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                <LoadCanvasTemplate />
                            </label>
                            <input className="w-full bg-gray-200 appearance-none border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="captcha" name="captcha" type="text" placeholder="type the text above" />

                        </div> */}
                        {/* Recaptcha end */}


                        <div className="flex items-center justify-center">
                            <input className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">Do not have an account? <Link className="text-blue-500 hover:text-blue-700 font-semibold" to="/signup">Sign Up</Link></p>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <span className="text-sm text-gray-600">Or sign in with:</span>
                        <div className="flex ml-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline" type="button">
                                Facebook
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline" type="button">
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;