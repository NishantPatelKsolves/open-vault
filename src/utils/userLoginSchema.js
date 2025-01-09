import * as yup from "yup";

const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,
      "Password must be at least 8 characters long and include one upper and one lower case letter, at least one number, and one special character."
    ),
});

export default userLoginSchema;
