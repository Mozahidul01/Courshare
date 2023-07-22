import { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import FormAction from "../components/FormAction";
import FormExtra from "../components/FormExtra";
import FormIcons from "../components/FormIcons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContex";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoding] = useState("");

  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
		e.preventDefault();

		//Input fields validate
		if (!email || !password) {
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

		logIn(email, password)
			.then((res) => {
				const user = res.user;
				setError("");
				setLoding(true);
				setEmail("");
				setPassword("");
				console.log(user);
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
				setLoding(false);
				setError("Faild to Log In!");
			});
	};

	return (
		<div className='section py-16 sm:w-[36rem]'>
			<div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl'>
				<h1 className='text-3xl font-bold text-center text-teal uppercase'>
					Log In
				</h1>
				<form className='mt-6'>
					<FormInput
						required
						type='email'
						labelText='Your Email'
						labelFor='email'
						placeholder='Enter Your Email'
						onChange={(e) => setEmail(e.target.value)}
					/>

					<FormInput
						required
						type='password'
						labelText='Your Password'
						labelFor='password'
						placeholder='Enter Your Password'
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Link
						to='/forget-password'
						className='text-xs text-teal hover:underline'
					>
						Forget Password?
					</Link>

					{error && (
						<p className='text-sm font-medium text-red-500'>{error}</p>
					)}

					<FormAction
						disabled={loding}
						handleSubmit={handleSubmit}
						text='Login'
					/>
				</form>

				<div className='mt-4 p-4 text-sm bg-stone-200 rounded'>
					<p>Demo Login Email: admin@gmail.com</p>
					<p>Demo Login Password: admin@12345</p>
				</div>

				<div className='relative flex items-center justify-center w-full mt-8 border border-t'>
					<div className='absolute px-5 bg-white'>Or</div>
				</div>

				{/* Social Media Log In Icons */}
				<FormIcons />

				{/* SignUp Option */}
				<FormExtra
					info="Don't have an account?"
					to='/sign-up'
					text='Sign Up'
				/>
			</div>
		</div>
	);
}
