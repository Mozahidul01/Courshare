import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../contexts/UserContex";

export default function FormIcons() {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
		<div className='flex mt-4 gap-x-2'>
			<button
				type='button'
				onClick={handleGoogleSignIn}
				className='icon-btn'
			>
				<FaGoogle className='w-5 h-5' />
			</button>
			{/* <button
				disabled
				className='icon-btn'
			>
				<FaFacebookF className='w-5 h-5' />
			</button>
			<button
				disabled
				className='icon-btn'
			>
				<FaGithub className='w-5 h-5' />
			</button> */}
		</div>
	);
}
