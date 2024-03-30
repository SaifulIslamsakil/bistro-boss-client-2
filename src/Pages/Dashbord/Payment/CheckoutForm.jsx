import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useCard from "../../../Hooks/useCard/useCard";
import { AuthContext } from "../../../Provider/Provider";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [clintSecret, setClintSecret] = useState("")
    const axiosSecrue = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data } = useCard()
    const totalPrice = data?.reduce((total, item) => total + item.ProductPrice
        , 0)
    useEffect(() => {
        axiosSecrue.post("/create-payment-intent", { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClintSecret(res?.data.clientSecret)
            })
    }, [axiosSecrue, totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {

            return alert("st")
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return alert("card")
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card

        })
        if (error) {
            setError(error.message)
        }
        else {
            setError('')
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
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=" btn btn-primary" type="submit" >
                    Pay
                </button>
            </form>
            <p className=" text-red-500 text-xl">{error}</p>
        </div>
    );
};

export default CheckoutForm;