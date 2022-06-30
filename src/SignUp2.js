import {useState} from "react";
import {AppleLogo, GoogleLogo, FacebookLogo  } from "phosphor-react";
import SignIn from "./SignIn";
import HomePage from "./HomePage"

function SignUp2(){
	const [signIn,setSignIn] = useState(false)
	const [signUp,setSignUp] = useState(false)
	const [form,setForm] = useState({
       email:"",
       password:"",
       password2:"",
       join: true
   })
   
   function handle(e){
       const {name,value,type,checked} = e.target
       setForm(prevForm =>{
           return {
               ...prevForm,
               [name] : type === "checkbox" ? checked : value,
               
           }
       })
   }
   console.log(form)
    function handleSubmit(event) {
        event.preventDefault()
    }    

    function onSignIn(){
    	setSignIn(true)
    }

    function onSignUp(){
    	setSignUp(true)
    }

	return(
			<div>
				{
					signIn ?
						<SignIn/> :
					signUp ?
						<HomePage/> :
					<div className="SignUp2">
						<img className="people2" src="https://5.imimg.com/data5/AA/IF/TH/SELLER-1594742/download-free-bulk-whatsapp-sending-software-1000x1000.png" alt="head"/>
						<h2>We care</h2>
						<div className="form-container">
							<h2>Sign up for free</h2>
				            <form className="form" onSubmit={handleSubmit}>
				                <input 
				                    type="email" 
				                    placeholder="Email address"
				                    className="form--input"
				                    name="email"
				                    value={form.email}
				                    onChange={handle}
				                />
				                <input 
				                    type="password" 
				                    placeholder="Password"
				                    className="form--input"
				                    name="password"
				                    value={form.password}
				                    onChange={handle}
				                />
				                <input 
				                    type="password" 
				                    placeholder="Confirm password"
				                    className="form--input"
				                    name="password2"
				                    value={form.password2}
				                    onChange={handle}
				                />
				                
				                <div className="form--marketing">
				                    <input
				                        id="okayToEmail"
				                        type="checkbox"
				                        name="join"
				                        checked={form.join}
				                        onChange={handle}
				                    />
				                    <label htmlFor="okayToEmail">Keep me always logged in</label>
				                </div>
				                <button onClick={onSignUp} className="form--submit">Sign up</button>
				            </form>
				        </div>
				        <p>Or continue with</p>
				        <div className="icons">
							<FacebookLogo size={32} color="#0d1be3" weight="fill" />
							<GoogleLogo size={32} color="#ec0909" weight="fill" />
							<AppleLogo size={32} color="#3f2727" weight="fill" />
				        </div>
				        <div className="no-acc">
							<p>Already have an account ? <span onClick={onSignIn}>Sign In</span></p>
						</div>
					</div>
				}
			</div>
		)
}

export default SignUp2;
