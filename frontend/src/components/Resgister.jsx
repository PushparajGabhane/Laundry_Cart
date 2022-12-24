import '../styles/Register.css';
import facebook from "../asset/facebook.svg";
import instagram from "../asset/instagram.svg";
import linkedin from "../asset/linkedin.svg";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    return (<>
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

                    <form method='post' id='Register_Form' action='http://localhost:5000/register'>

                        <p className='rightBodySection_header'>REGISTER</p>
                        <div className='sameInput'>
                            <input type="text" placeholder='Name' className='common' />
                            <input type="text" placeholder='Email' className='common' />
                        </div>
                        <div className='sameInput'>
                            <input type="text" placeholder='Phone' className='common' />
                            <input type="text" placeholder='State' className='common' />
                        </div>
                        <div className='sameInput'>
                            <input type="text" placeholder='District' className='common' />
                            <input type="text" placeholder='Address' className='common' />
                        </div>
                        <div className='sameInput'>
                            <input type="text" placeholder='Pincode' className='common' />
                            <input type="password" placeholder='Password' className='password' />
                        </div>
                        <div className='checkBox_button'>
                            <input type='checkbox' />
                            <p>I agree to Terms & Condition receiving marketing and promotional materials</p>
                        </div>
                        <button className='registerForm_signIn_button'>Register</button>

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
    </>
    )
}