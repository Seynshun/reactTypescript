import * as Yup from "yup";
import { Formik } from "formik";
import {
  StyledForm,
  StyledInput,
  StyledAlert,
  StyledSubmitButton,
} from "./StyledForm";

type FormProps = {
  formValues: any;
};

const AgentSchema = Yup.object().shape({
  firstName: Yup.string().required("First name required"),
  lastName: Yup.string().required("Last name required"),
});

const MyForm: React.FunctionComponent<FormProps> = ({ formValues }) => {
  const initialValues: any = { firstName: "", lastName: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AgentSchema}
      onSubmit={(values, { resetForm }) => {
        formValues(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <div>
            <StyledInput
              id="firstName"
              name="firstName"
              placeholder="Prénom de l'agent"
            />
            {errors.firstName && touched.firstName ? (
              <div>
                <StyledAlert message={errors.firstName} type="error" showIcon />
              </div>
            ) : null}
          </div>
          <div>
            <StyledInput
              id="lastName"
              name="lastName"
              placeholder="Nom de l'agent"
            />
            {errors.lastName && touched.lastName ? (
              <div>
                <StyledAlert message={errors.lastName} type="error" showIcon />
              </div>
            ) : null}
          </div>
          <StyledSubmitButton type="primary" loading={false}>
            Submit
          </StyledSubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default MyForm;
