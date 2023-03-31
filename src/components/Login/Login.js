import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.scss"


export default function Login(props) {
    //log in password show hide
    const [showHide, setShowHide] = useState(false);
    const handleShowHide = () => {
        setShowHide(!showHide);
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
                    <div className='login'>
                        <div className='switchBtn'>
                            <Link to="/Register"><i className=" fa-duotone fa-user-plus"></i>ثبت نام</Link>
                            <Link to="/"><i className=" fa-duotone fa-key-skeleton"></i>ورود</Link>
                        </div>
                        <div className='loginDesc'>
                            <h2>سلام رفیق!</h2>
                            <p>به خونه خوش اومدی! اگه عضو هستی، وارد شو</p>
                        </div>
                        {
                            props.pleaseRegister ?
                                <div className='pleaseRegister'>
                                    <span>لظفا ثبت نام کنید</span>
                                </div>
                                : null
                        }
                        {
                            props.loginSuccess ?
                                <div className='loginSuccsses'>
                                    <span>با موفقیت وارد شدید</span>
                                </div>
                                :
                                null
                        }
                        {
                            props.loginNotSuccess ?
                                <div className='loginNotSuccessful'>
                                    <span>ورود ناموفق بود</span>
                                </div>
                                :
                                null
                        }
                        <form className='loginInputs' onSubmit={props.registered ? props.handleLogin : props.handlePleaseRegister}>
                            <div className='email'>
                                <label >ایمیل</label>
                                <input type="email" value={props.loginEmail} onChange={props.handleLoginEmail} />
                            </div>
                            <label >پسورد</label>
                            <div className='password'>
                                <input type={showHide ? "text" : "password"} value={props.loginPassword} onChange={props.handleLoginPassword} />
                                <i onClick={handleShowHide} className={showHide ? "fa-duotone fa-eye-slash" : "fa-duotone fa-eye"}></i>
                            </div>
                            <button>ورود</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
