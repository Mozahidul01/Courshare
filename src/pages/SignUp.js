import { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import FormAction from "../components/FormAction";
import FormExtra from "../components/FormExtra";
import FormIcons from "../components/FormIcons";
import { AuthContext } from "../contexts/UserContex";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoding] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    //Input fields validate
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const passwordRegex = "^(?=.*?[a-z])(?=.*?[0-9]).{6,}$";

    //Password Strength Validate
    if (!password.match(passwordRegex)) {
      setError(
        "Password must be at least 6 characters long and contain at least one letter, & one number "
      );
      return;
    }

    //Password and Confirm Password Validate
    if (password !== confirmPassword) {
      setError("Passwords Don't Match!");
      return;
    }

    //Term & Condition Validate
    if (!agree) {
      setError("You must agree to the terms and conditions");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setError("");
        setLoding(true);
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setLoding(false);
        setError("Faild to create an account!");
      });
  };

  return (
    <div className="section py-16 sm:w-[36rem]">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-teal uppercase">
          Create A New Account
        </h1>

        <form className="mt-6">
          <FormInput
            type="text"
            required
            placeholder="Enter Your Name"
            onChange={(e) => setUsername(e.target.value)}
            labelText="Your Name"
            labelFor="username"
          />
          <FormInput
            type="email"
            required
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            labelText="Your Email"
            labelFor="email"
          />

          <FormInput
            type="password"
            required
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            labelText="Your Password"
            labelFor="password"
          />
          <FormInput
            type="password"
            required
            placeholder="Confirm Your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            labelText="Confirm Password"
            labelFor="confirmPassword"
          />

          <FormCheckbox
            type="checkbox"
            required
            text=" I agree to the Terms &amp; Conditions"
            onChange={(e) => setAgree(e.target.value)}
          />

          {error && <p className="text-sm font-medium text-red-500">{error}</p>}

          <FormAction
            disabled={loding}
            handleSubmit={handleSubmit}
            text="Signup"
          />
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
