import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/reservation/wood-grain-pattern-gray1x.png"
import img2 from "../../assets/others/authentication2.png"
import Socal from "../../Shred/Socal/Socal";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        userLogin(data.email, data.password)
            .then(res => {
                if(res){
                    Swal.fire({
                        title: "Good job!",
                        text: "You Accout suecssfully Login!",
                        icon: "success"
                    });
                    navigate("/")
                }
            })
            .catch(err => {
                if(err){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                      });
                      reset()
                }
            })
    }
    return (
        <div className=" h-full lg:h-screen w-full p-10 items-center md:flex" style={{ backgroundImage: `url(${img})` }}>
            <div className=" md:flex-1 ">
                <img className=" " src={img2} alt="" />
            </div>
            <div className=" md:flex-1  card-body">
                <h3 className=" text-center text-2xl font-semibold">Please Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Email
                            </span>
                        </label>
                        <input className="input input-bordered" type="email"{...register("email", { required: true })} placeholder="Enter your email" />
                        {errors.email && <span className=" text-red-600 "> email is required</span>}
                    </div>
                    <div className=" form-control">
                        <label className=" label">
                            <span className=" label-text">
                                Password
                            </span>

                        </label>
                        <input className="input input-bordered" type="password"{...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} placeholder="create an  password" />
                        {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                        {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                        {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                    </div>
                    <div className=" mt-4">
                        <input className="btn w-full bg-orange-600  hover:bg-orange-500 text-white " type="submit" value="please Login" />
                    </div>


                </form>
                <div>
                    <p className=" text-2xl text-center"><small>your need  an accout <Link to="/register" className=" text-red-600 hover:underline">please Register</Link> </small></p>
                </div>
                <div className="divider divider-error">OR</div>
                <div>
                    <Socal></Socal>
                </div>
            </div>
        </div>
    );
};

export default Login;