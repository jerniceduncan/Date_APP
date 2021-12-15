import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51K73ViIbODyFezsdmfNfA9n2JOXQK5PSR2ppyAmddxEsX2fzcgMlgLd1iPxdXgmwjscDOVtyYUsMEDWAfEtJDxrl00rqYp0aKG');

function App() {
    const options = {
      // passing the client secret obtained from the server
      clientSecret: '{{CLIENT_SECRET}}',
    };
  
    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    );
  };