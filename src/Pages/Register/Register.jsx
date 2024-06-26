import { useForm } from "react-hook-form";
import img from "../../assets/reservation/wood-grain-pattern-gray1x.png"
import img2 from "../../assets/others/authentication2.png"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Socal from "../../Shred/Socal/Socal";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import Auth from "../../Firbase/Firbase.confiq";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic"
const Register = () => {
    const [btnDisabled, setBtnDisabled]= useState(true)
    const captchaRef = useRef(null)
    const {createUser} = useContext(AuthContext)
    const AxiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setBtnDisabled(false)
        }
        else {
            setBtnDisabled(true)
        }

    }
    
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(res=>{
            updateProfile(Auth.currentUser,{
                displayName:data?.name, 
                photoURL:data.photoUrl,
            })
            .then(()=>{
                const userInfo ={
                    Name:data.name,
                    email:data.email
                } 
                AxiosPublic.post("/user", userInfo)
                .then(res=>{
                    if(res.data.acknowledged){
                        Swal.fire({
                            title: "Good job!",
                            text: "You Accout suecssfully register!",
                            icon: "success"
                        });
                        reset()
                        navigate("/")
                       }
                })
            })
        })
        .catch(err=>{
           if(err){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
           }
        })
    }
    return (
        <div className="  w-full p-10 " style={{ backgroundImage: `url(${img})` }}>
            <div className="items-center lg:flex">
                <div className=" md:flex-1">
                    <img  className=" mx-auto " src={img2} alt="" />
                </div>
                <div className=" md:flex-1 card-body">
                    <h3 className=" text-center font-semibold text-2xl">Please Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <label className=" label">
                                <span className="label-text">
                                    Name
                                </span>
                            </label>
                            <input className="input input-bordered" type="text" {...register("name", { required: true })} placeholder="Enter your name" />
                            {errors.name && <span className=" text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Email
                                </span>
                            </label>
                            <input className="input input-bordered" type="email"{...register("email", { required: true })} placeholder="Enter your email" />
                            {errors.email && <span className=" text-red-600 "> email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Photo Url
                                </span>
                            </label>
                            <input className="input input-bordered" type="text"{...register("PhotoUrl", { required: true })} placeholder="Enter your PhotoUrl" />
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
                        <div className=" form-control">
                        <label className=" label">
                            <span className=" label-text">
                                <LoadCanvasTemplate />
                            </span>
                        </label>
                        <input className="input input-bordered" type="text" ref={captchaRef} name="captcha" placeholder=" type the text abov" required />
                        <button  onClick={handelCaptcha} className="  btn-xs btn-outline border mt-2 ">Validate</button>
                    </div>
                        <div className=" mt-4">
                            <input disabled={btnDisabled} className="btn w-full bg-orange-600  hover:bg-orange-500 text-white " type="submit" value="please Register" />
                        </div>
                    </form>
                    <div>
                        <p className=" text-2xl text-center"><small>you have an accout <Link to="/login" className=" text-red-600 hover:underline">please login</Link> </small></p>
                    </div>
                    <div className="divider divider-error">OR</div>
                    <Socal></Socal>
                </div>
            </div>
        </div>
    );
};

export default Register;