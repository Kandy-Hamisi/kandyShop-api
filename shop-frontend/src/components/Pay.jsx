import styled from "styled-components"
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from "react";
import axios from 'axios';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Button  = styled.div`
    background-color: #000;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    width: 100px;
    display: flex;
    justify-content: center;
    cursor: pointer;

`;

const KEY = "pk_test_51JJIz8GLFwMKFO7cof6PlJqDdQda0ZyU01unwzPT9GnHhKLuQb5QBEMNLhCiS52jioJHt5q4XfS0cGlPvAI4vrIy000zodY4vp";

const Pay = () => {
    
    const [ stripeToken, setStripeToken ] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                    );
                    console.log(response.data);
            }catch(err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken])

  return (
    <Container>
        <StripeCheckout
            name="Kandy Shop"
            image="https://avatars.githubusercontent.com/u/61687064?v=4"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <Button>Pay Now</Button>
        </StripeCheckout>
    </Container>
  )
}

export default Pay