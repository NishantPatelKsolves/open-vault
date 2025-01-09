import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";


import { InputField, PasswordField } from "../../components/shared/formFields/";

import UserLoginSchema from "../../utils/UserLoginSchema";
import { history } from "../../helper/history";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const LeftImage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 58.333333%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 3rem 5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    width: 41.666667%;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;

  img {
    width: 357px;
    height: 96px;
  }
`;

const Heading = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const SubHeading = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: #1a1a1a;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const FormRow = styled.div`
  margin-bottom: 1rem;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #e5e5e5;
    background-color: #f2f2f2;
  }

  span {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    color: #1a1a1a;
  }
`;

const ForgotPasswordLink = styled.a`
  font-size: 0.875rem;
  color: #007aff;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  background-color: #f49200;
  border: none;
  border-radius: 0.5rem;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });

  // console.log("Rendered");

  const onSubmit = (data) => {
    console.log("Form Data:", data.email, data.password);
    toast.success("Logged in successfully");
    //clear fields after successful login
    reset({
      email: "",
      password: "",
    });
    history.push("/dashboard");
  };

  return (
    <Container>
      <LeftImage>
        <img src="src/assets/img/login-img.png" alt="Login Sider Image" />
      </LeftImage>
      <RightContent>
        <LogoWrapper>
          <img src="src/assets/img/logo.png" alt="Logo Image" />
        </LogoWrapper>
        <Heading>Login to your Account</Heading>
        <SubHeading>Welcome back! Please enter your details.</SubHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <InputField
              type="text"
              name="email"
              placeholder="Email"
              register={register}
              errors={errors}
              label="Email"
            />
          </FormRow>
          <FormRow>
            <InputWrapper>
              <PasswordField
                type="password"
                name="password"
                placeholder="Enter password"
                register={register}
                errors={errors}
                label="Password"
              />
            </InputWrapper>
          </FormRow>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <CheckboxWrapper>
              <input type="checkbox" />
              <span>Remember me</span>
            </CheckboxWrapper>
            <ForgotPasswordLink href="#">Forgot password?</ForgotPasswordLink>
          </div>
          <SubmitButton type="submit">Sign in</SubmitButton>
        </form>
      </RightContent>
    </Container>
  );
};

export default Login;
