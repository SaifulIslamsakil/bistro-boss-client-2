
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import { AuthContext } from "../../../Provider/Provider";
import useCard from "../../../Hooks/useCard/useCard";
const Payment = () => {
    const stripe = useStripe()
    const element = useElements()
    const [errror, serError] = useState('')
    const [clintSecret, setClintSecret] = useState("")
    const AxiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    const {data} = useCard
    const totalPrice = data?.reduce((total, item) => total + item.ProductPrice, 0)

    useEffect(() => {
        AxiosPublic.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClintSecret(res?.data.clientSecret)
            })
    }, [AxiosPublic, totalPrice])
    const handelPayment = async (event) => {

        event.preventDefault()

        if (!stripe || !element) {
            return console.log("error 1")
        }

        const card = element.getElement(CardElement)

        if (card === null) {
            return console.log("error 2")
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })


        if (error) {
            serError(error.message)
            return
        }
        if (paymentMethod) {
            console.log(paymentMethod)
        }
        const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(clintSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email
                }
            }
        })

        if (paymentError) {
            console.log(paymentError)
        }
        if (paymentIntent) {
            console.log(paymentIntent)
        }



    }
    return (
        <div>
            <form onSubmit={handelPayment}>
                <CardElement
                    options={
                        {
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: "#424770",
                                    '::placeholder': {
                                        color: '#aab7c4'
                                    },
                                },
                                invalid: {
                                    color: "#9e2146"

                                }
                            }
                        }
                    }
                >
                </CardElement>
                <button type="submit" className="btn btn-primary">
                    Pay
                </button>
                <p className=" text-red-500 text-xl">{errror}</p>
            </form>
        </div>
    );
};

export default Payment;