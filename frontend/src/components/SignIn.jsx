export default function SignIn(){
    return (
        <div className="signIn">
            <section className="headerSection">
                <p className="header">LAUNDRY</p>
                <div className="buttons">
                    <button>Home</button>
                    <button>Pricing</button>
                    <button>Career</button>
                    <button>Sign In</button>
                </div>
            </section>
            <section className="bodySection">
                <div className="leftBodySection">
                    <p>Laundry</p>
                    <p>Service</p>
                    <p>Doorstep Wash & Dryclean service</p>
                    <p>Don't Have An Account?</p>
                    <button>Register</button>
                </div>
                <div className="rightBodySection">
                    <p>SIGN IN</p>
                    <input type="text" placeholder='Mobile/Email'></input>
                    <input type="password" placeholder='password'></input>
                    <p>Forget Password?</p>
                    <button>Sign In</button>
                </div>
            </section>
            <section className="bottomSection">
                    <div className="referSection"></div>
                    <div className="aboutUs"></div>
            </section>
        </div>
    )
}