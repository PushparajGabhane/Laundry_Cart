import '../styles/SignIn.css';
import facebook from "../asset/facebook.svg";
import instagram from "../asset/instagram.svg";
import linkedin from "../asset/linkedin.svg";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function SignIn() {
    const [email_phone, setEmail_Phone] = useState('');
    const [password, setPassword] = useState('');
    const [form, setForm] = useState({});
    const [emailPhoneError, setEmailPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    // signInHandler for sign in 
    const signInHandler = (e) => {
        e.preventDefault();
        let phone;
        // console.log(typeof email_phone, email_phone);
        if(Number(email_phone)){
            phone = Number(email_phone)
            console.log('phone', phone);
            setForm({
                email_phone: phone,
                password: password
            })
        }else{
            setForm({
                email_phone: email_phone,
                password: password
            });
        }
        // console.log('Form', form);

    }
    useEffect(() => {
        if (form.email_phone && form.password) {
            Axios.post('/signIn', form)
                .then((res) => {
                    setPasswordError('')
                    console.log('Sign in succesfull', res.data);
                    alert('sign in successfull!');
                    setTimeout(()=>{
                        navigate('/createOrder')
                    },2000)
                })
                .catch((err) => {
                    console.log('error in sign in', err.response.data);
                    if(err.response.data.errorType==='email'){
                        setEmailPhoneError("* Invalid email");
                        setPasswordError('');
                    }
                    if(err.response.data.errorType==='phone'){
                        setEmailPhoneError('* Invalid Phone Number');
                        setPasswordError('');
                    }
                    if(err.response.data.errorType==='password'){
                        setPasswordError('* Invalid Password');
                        setEmailPhoneError('');
                    }
                })
        }
    }, [form, navigate])

    return (
        <div className="signIn">
            <section className="headerSection">
                <p className="header">LAUNDRY</p>
                <div className="buttons">
                    <button className='same'>Home</button>
                    <button className='same'>Pricing</button>
                    <button className='same'>Career</button>
                    <button className='headerSection_signIn'>Sign In</button>
                </div>
            </section>
            <section className="bodySection">
                <div className="leftBodySection">
                    <p className='laundry'>Laundry</p>
                    <p className='service'>Service</p>
                    <p className='serviceWork'>Doorstep Wash & Dryclean service</p>
                    <p className='noAccount'>Don't Have An Account?</p>
                    <button className='leftBodySection_Register' onClick={(e) => { navigate('/register') }}>Register</button>
                </div>
                <div className="rightBodySection">
                    <form method='post'>

                        <p className='rightBodySection_signIn'>SIGN IN</p>
                        <input
                            type="text"
                            value={email_phone}
                            placeholder='Mobile / Email'
                            className='mobile_email'
                            onChange={(e) => { setEmail_Phone(e.target.value)}}
                        />
                        <p className='errorEmail_phone'>{emailPhoneError}</p>

                        <input
                            type="password"
                            value={password}
                            placeholder='Password'
                            className='password'
                            onChange={(e) => { setPassword(e.target.value)}}
                        />
                        <p className='errorEmail_phone'>{passwordError}</p>

                        <p className='forgetPassword'>Forget Password?</p>

                        <button onClick={(e) => signInHandler(e)}>Sign In</button>

                    </form>
                </div>
            </section>
            <section className="bottomSection">
                <div className="referSection">
                    <p className="referal">Now Refer & Earn <i className="fa fa-inr"> 500</i> for every refferal*</p>
                    <p className='terms'>*Terms and conditions will be applied</p>
                </div>
                <div className="aboutUs">
                    <div className="about_us">
                        <h3>ABOUT US</h3>
                        <p>Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className="home">
                        <h3>Home</h3>
                        <p>Sign In</p>
                        <p>Register</p>
                    </div>
                    <div className="pricing">
                        <h3>Pricing</h3>
                    </div>
                    <div className="career">
                        <h3>Career</h3>
                        <p>Blogs</p>
                        <p>Create</p>
                    </div>
                    <div className="contact">
                        <h3>Contact</h3>
                    </div>
                    <div className="social_media">
                        <h3>SOCIAL MEDIA</h3>
                        <div className="socialMediaIcons">
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                </div>
                <div className='footerDate'>
                    <h3>2022 @ Laundry</h3>
                </div>
            </section>
        </div>
    )
}