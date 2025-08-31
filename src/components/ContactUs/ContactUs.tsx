import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CONTACT_US_VALUE } from "./types";

import { ContactUsFormContainer, Title, InputsContainer } from "./styles";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_VALUE.FULL_NAME]: Yup.string()
      .required("Full Name field is required")
      .min(3, "Email field should contain minimum 3 characters")
      .max(50, "Email field should contain maximum 50 characters"),
    [CONTACT_US_VALUE.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Phone field should contain minimum 4 characters")
      .max(20, "Phone field should contain maximum 20 characters"),
    [CONTACT_US_VALUE.EMAIL]: Yup.string()
    //   .required("Email field is required")
      .min(6, "Email field should contain minimum 5 characters")
      .max(60, "Email field should contain maximum 60 characters")
      .email("This field should be in email format"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_VALUE.FULL_NAME]: "",
      [CONTACT_US_VALUE.PHONE]: "",
      [CONTACT_US_VALUE.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log(values);
      console.log(helpers);
      helpers.resetForm();
    },
  });
//   console.log(formik);

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="fullName-id"
          name={CONTACT_US_VALUE.FULL_NAME}
          placeholder="Enter your full name"
          label="Full Name"
          value={formik.values[CONTACT_US_VALUE.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUE.FULL_NAME]}
        />
        <Input
          id="Phone-id"
          name={CONTACT_US_VALUE.PHONE}
          placeholder="Enter your phone number"
          label="Phone"
          value={formik.values[CONTACT_US_VALUE.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUE.PHONE]}
        />
        <Input
          id="Email-id"
          name={CONTACT_US_VALUE.EMAIL}
          placeholder="Enter your Email"
          label="Email"
          value={formik.values[CONTACT_US_VALUE.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUE.EMAIL]}
        />
      </InputsContainer>

      <Button name="SEND REQUEST" type="submit" />
    </ContactUsFormContainer>
  );
}

export default ContactUs;
