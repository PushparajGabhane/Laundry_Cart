import '../styles/SignIn.css';
import facebook from "../asset/facebook.svg";
import instagram from "../asset/instagram.svg";
import linkedin from "../asset/linkedin.svg";
// import footer from "../asset/Footer.svg";

export default function SignIn(){
    return (
        <div className="signIn">
            <section className="headerSection">
                <p className="header">LAUNDRY</p>
                <div className="buttons">
                    <button>Home</button>
                    <button>Pricing</button>
                    <button>Career</button>
                    <button className='headerSection_signIn'>Sign In</button>
                </div>
            </section>
            <section className="bodySection">
                <div className="leftBodySection">
                    <p className='laundry'>Laundry</p>
                    <p className='service'>Service</p>
                    <p className='serviceWork'>Doorstep Wash & Dryclean service</p>
                    <p className='noAccount'>Don't Have An Account?</p>
                    <button className='leftBodySection_Register'>Register</button>
                </div>
                <div className="rightBodySection">
                    <p className='rightBodySection_signIn'>SIGN IN</p>
                    <input type="text" placeholder='Mobile / Email' className='mobile_email'/>
                    <input type="password" placeholder='password' className='password'/>
                    <p>Forget Password?</p>
                    <button>Sign In</button>
                </div>
            </section>
            <section className="bottomSection">
                    <div className="referSection">
                        <p className="referal">Now Refer & Earn <i className="fa fa-inr"> 500</i> for every refferal*</p>
                        <p>*Terms and conditions will be applied</p>
                    </div>
                    <div className="aboutUs">
                        <div className="about_us">
                            <p>ABOUT US</p>
                            <p>Doorstep Wash & Dryclean Service</p>
                        </div>
                        <div className="home">
                            <p>Home</p>
                            <p>Sign In</p>
                            <p>Register</p>
                        </div>
                        <div className="pricing">
                            <p>Pricing</p>
                        </div>
                        <div className="career">
                            <p>Career</p>
                            <p>Blogs</p>
                            <p>Create</p>
                        </div>
                        <div className="contact">
                            <p>Contact</p>
                        </div>
                        <div className="social_media">
                            <p>Social Media</p>
                            <div className="socialMediaIcons">
                                <img src={facebook} alt="facebook"/>
                                <img src={instagram} alt="instagram"/>
                                <img src={linkedin} alt="linkedin"/>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}