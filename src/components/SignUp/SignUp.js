import React from "react";

import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  position: relative;
  left: 50%;
  transform: translate(-50%, 20%);
  padding: 95px;
  background-color: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.4);
  font-family: "Roboto", Arial, Helvetica, sans-serif;

  h1 {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Container>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <input type="submit" />
      </form>
    </Container>
  );
};

export default SignUp;
