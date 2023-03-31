import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.scss";

export default function Register(props) {
  //set show hide password
  const [showHide, setShowHide] = useState(false);
  const handleShowHide = () => {
    setShowHide(!showHide);
  }
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-8 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
          <div className='Register'>
            <div className='switchBtn'>
              <Link to="/Register"><i className=" fa-duotone fa-user-plus"></i>ثبت نام</Link>
              <Link to="/"><i className=" fa-duotone fa-key-skeleton"></i>ورود</Link>
            </div>
            <div className='registerDesc'>
              <h2>ثبت‌نام</h2>
              <p>برای عضویت موارد زیر را وارد کنید</p>
            </div>
            {
              props.registered ?
                <div className='registerSuccsses'>
                  <span>ثبت نام با موفقیت انجام شد</span>
                </div>
                : null
            }
            {
              props.formEmpty ?
                <div className='registerFormEmpty'>
                  <span>لطفا همه فیلد هارا پر کنید</span>
                </div>
                : null
            }
            <form className='registerInputs' onSubmit={props.handleRegisterData}>
              <div className='email'>
                <label>ایمیل</label>
                <input type="email" value={props.registerEmail} onChange={props.handleRegisterEmail} />
              </div>
              <label>پسورد</label>
              <div className='password'>
                <input type={showHide ? "text" : "password"} value={props.registerPassword} onChange={props.handleRegisterPassword} />
                <i onClick={handleShowHide} className={showHide ? "fa-duotone fa-eye-slash" : "fa-duotone fa-eye"}></i>
              </div>
              <div className='username'>
                <label>نام کاربری</label>
                <input type="text" value={props.registerUsername} onChange={props.handleRegisterUsername} />
              </div>
              <button>ثبت نام</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
