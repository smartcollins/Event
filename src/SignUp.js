import {useState} from "react";
import {AppleLogo, GoogleLogo, FacebookLogo  } from "phosphor-react";
// import SignUp2 from "./SignUp2";
// import SignIn from "./SignIn"


function SignUp(){
	const [signUp,setSignUp] = useState(false)
	const [signIn,setSignIn] = useState(false)

	function onSignUp(){
		setSignUp(true)
	}

	function onSignIn(){
		setSignIn(true)
	}

	return(
			<div>
				{
					// signUp ?
					// 	<SignUp2/> :
					// signIn ? 
					// 	<SignIn/> :
					<div className="signup">
						<div className="intro-main">
							<div  className="signup-img"></div>
						</div>
						<h2>Lets you in</h2>
						<div className="signup-btn">
							<button>
								<FacebookLogo size={20} color="#0d1be3" weight="fill" />
								<p className="logo-text">Facebook</p>
							</button>
							<button>
								<GoogleLogo size={20} color="#ec0909" weight="fill" />
								<p className="logo-text">Google</p>
							</button>
							<button>
								<AppleLogo size={20} color="#3f2727" weight="fill" />
								<p className="logo-text">Apple</p>
							</button>
							<p>Or</p>
							<button onClick={onSignIn} className="sign-in">Sign in With Password</button>	
							<div className="no-acc">
								<p>don't have an account ? <span onClick={onSignUp}>Sign Up</span></p>
							</div>
						</div>
					</div>
				}
			</div>
		)
}

export default SignUp;