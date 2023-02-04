import { useState } from "react";
import { signupFields } from "../Data/formField";
import FormInput from "../components/FormInput";
import FormAction from "../components/FormAction";
import FormExtra from "../components/FormExtra";
import FormIcons from "../components/FormIcons";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUp() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
  };

  return (
    <div className="section">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-teal uppercase">
          Create A New Account
        </h1>

        <form className="mt-6">
          {fields.map((field) => (
            <FormInput
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}

          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </form>

        <div className="relative flex items-center justify-center w-full mt-8 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        {/* Social Media Log In Icons */}
        <FormIcons />

        {/* SignUp Option */}
        <FormExtra info="Already have an account?" to="/log-in" text="Log In" />
      </div>
    </div>
  );
}
