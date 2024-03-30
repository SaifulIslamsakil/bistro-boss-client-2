import { loadStripe } from "@stripe/stripe-js";
import SectionHading from "../../../Shred/SectionHadding/SectionHading"
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51OEvv1AD2BmhwX6YVZp9OpeQSjRYijAgScIRd2rZ83oxjo7c2lEDKIo3Q0TBSW8BX2crr5SUQIf79jZlAFwnipP700Kr8taFYZ')
const Payment = () => {
    return (
        <div>
            <SectionHading
                hadding="PAYMENT"
                subHadding="all right"
            >
            </SectionHading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;