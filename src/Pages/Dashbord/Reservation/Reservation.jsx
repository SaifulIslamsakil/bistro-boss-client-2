import SectionHading from "../../../Shred/SectionHadding/SectionHading";
import Payment from "../Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51OEvv1AD2BmhwX6YVZp9OpeQSjRYijAgScIRd2rZ83oxjo7c2lEDKIo3Q0TBSW8BX2crr5SUQIf79jZlAFwnipP700Kr8taFYZ")
const Reservation = () => {
    return (
        <div>
            <SectionHading
                hadding="PAYMENT"
                subHadding="all right"
            >
            </SectionHading>
            <Elements stripe={stripePromise}>
                <Payment></Payment>
            </Elements>
        </div>
    );
};

export default Reservation;