import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  contactNumber: yup
    .string()
    .required("Contact number is required")

    .matches(/^[0-9]{10}$/, "Contact number must be exactly 10 digits"),
});
export default validationSchema;
