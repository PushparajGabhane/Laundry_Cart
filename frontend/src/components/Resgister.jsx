import '../styles/Register.css';
import facebook from "../asset/facebook.svg";
import instagram from "../asset/instagram.svg";
import linkedin from "../asset/linkedin.svg";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

export default function Register() {
    // useState hooks are here
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [form, setForm] = useState({});
    // errors starts here 
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [submit, setSubmit] = useState(false)
    // useNavigate for navigate
    const navigate = useNavigate()
    // registerHandler to submit the form
    const registerHandler = (e) => {
        e.preventDefault();
        setSubmit(true)
    }
    useEffect(() => {
        if (check) {
            if(Number(phone)){
                setForm({
                    name: name,
                    email: email,
                    phone: phone,
                    state: state,
                    district: district,
                    address: address,
                    pincode: pincode,
                    password: password
                })
            }
        } else {
            setForm({})
        }
    }, [check, name, email, phone, state, district, address, pincode, password])

    useEffect(() => {
        if (submit) {
            if (form.name && form.email && form.phone && form.state && form.district && form.address && form.pincode && form.password) {
                Axios.post('/register', form)
                    .then((res) => {
                        console.log('Registration succesfull', res.data);
                        alert('Registration Succesfull');
                        setTimeout(() => {
                            navigate('/signIn')
                        }, 3000)
                    })
                    .catch((err) => {
                        console.log('resgistration failed', err.response.data);
                        let errArr = err.response.data.errorType;

                        // console.log(errArr);
                        errArr.forEach((e, i) => {
                            if (e === 'email') {
                                setEmailError("* email already exists")
                            }
                            if (e === 'phone') {
                                setPhoneError('* phone number already exists')
                            }
                        })
                    })
            }
            return setSubmit(false)
        }
    }, [form, submit, navigate])
    return (
        <div className="register">
            <section className="headerSection">
                <p className="header">LAUNDRY</p>
                <div className="buttons">
                    <button className='same'>Home</button>
                    <button className='same'>Pricing</button>
                    <button className='same'>Career</button>
                    <button className='headerSection_signIn'>Sign In</button>
                </div>
            </section>
            <section className="registerBodySection">
                <div className="register_LeftBodySection">
                    <p className='laundry'>Laundry</p>
                    <p className='service'>Service</p>
                    <p className='serviceWork'>Doorstep Wash & Dryclean service</p>
                    <p className='noAccount'>Already Have Account</p>
                    <button className='leftBodySection_Register' onClick={(e) => { navigate('/signIn') }}>Sign In</button>
                </div>
                <div className="register_RightBodySection">
                    <form method='post' id='Register_Form'>
                        <p className='rightBodySection_header'>REGISTER</p>
                        <div className='sameInput'>
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name' className='common' />
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    onClick={(e) => { setEmailError('') }}
                                    placeholder='Email'
                                    className='common'
                                />
                                <p className='error'>{emailError}</p>
                            </div>
                        </div>
                        <div className='sameInput'>
                            <div>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    onClick={(e) => { setPhoneError('') }}
                                    placeholder='Phone'
                                    className='common'
                                />
                                <p className='error'>{phoneError}</p>
                            </div>
                            <input type="text" value={state} onChange={(e) => { setState(e.target.value) }} placeholder='State' className='common' />
                        </div>
                        <div className='sameInput'>
                            <input type="text" value={district} onChange={(e) => { setDistrict(e.target.value) }} placeholder='District' className='common' />
                            <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Address' className='common' />
                        </div>
                        <div className='sameInput'>
                            <input type="text" value={pincode} onChange={(e) => { setPincode(e.target.value) }} placeholder='Pincode' className='common' />
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' className='common' />
                        </div>
                        <div className='checkBox_button'>
                            <input type='checkbox' value={check} onChange={(e) => { setCheck(!check) }} />
                            <p>I agree to Terms & Condition receiving marketing and promotional materials</p>
                        </div>
                        <button onClick={(e) => { registerHandler(e) }} className='registerForm_signIn_button'>Register</button>

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