import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MbPMpEWcdqPu6csqjVxMwQgOnsHOV1AfqhYclu5HCJKTXhQhU8zYp3iKunIchSlJo7cSdpbmEaJbM1ZWG07ByDn00i32QZe60"
);

function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Payment;
