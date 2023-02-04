import { useState } from "react";
import { loginFields } from "../Data/formField";
import FormInput from "../components/FormInput";
import FormAction from "../components/FormAction";
import FormExtra from "../components/FormExtra";
import FormIcons from "../components/FormIcons";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function LogIn() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-teal uppercase">
          Log In
        </h1>
        <form className="mt-6">
          {fields.map((field) => (
            <FormInput
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <a href="/" className="text-xs text-teal hover:underline">
            Forget Password?
          </a>
          <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>

        <div className="relative flex items-center justify-center w-full mt-8 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        {/* Social Media Log In Icons */}
        <FormIcons />

        {/* SignUp Option */}
        <FormExtra info="Don't have an account?" to="/sign-up" text="Sign Up" />
      </div>
    </div>
  );
}
