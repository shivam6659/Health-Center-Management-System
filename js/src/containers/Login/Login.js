import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from "redux";
import styles from "./styles.module.css";
import Image from 'next/image';
import ExperienceFasterIcon from "../../assets/icon/experienceFaster.png";
import EnsureFirstIcon from "../../assets/icon/ensureFirst.png";
import EffertlessIcon from "../../assets/icon/effertless.png";
import Crossicon from "../../assets/icon/crossicon.png";
import { getOtp } from "../../redux/actions/authAction";
import EnterOtp from "../../components/OtpInput/EnterOtp";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { isNumeric } from "../../utils/CheckValidations";

const MobileLoginModal = (props) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const [isSendOtp, setIsSendOtp] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();

        try {
            setIsSendOtp(true);
            props.getOtp({
                request: {
                    "user_email": "munesh.titanium@gmail.com"
                },
                onSuccess: (res) => {
                    console.log("SFEWRROPWROWE ", res)
                    setIsSendOtp(true);
                },
                onFailure: (error) => {

                }
            })
            // setCookie("server_token", "#xud$7i899jjjjj");
            // setIsSendOtp(true);
            // setCookie("server_token", "#xud$7i899jjjjj");
            // props.handleSubmit();

            //  props.getOtp({
            //     onSuccess: (res) => {
            //         setCookie("server_token", "#xud$7i899jjjjj");
            //         setIsSendOtp(true);
            //     },
            //     onFailure: (error) => {
            //         console.log(error)
            //     }
            // })
        } catch (error) {
            setError('Please enter valid mobile number');
        }
    };

    const handleOTPComplete = (otp) => {
        console.log('OTP entered:', otp);
        // Here, you can handle the OTP validation or any other logic
        props.handleSubmit();
    };

    return (
        <div className={styles.modal}>

            <div className={styles.modalContent}>
                <div className={styles.staticInfCon}>
                    <br />
                    <label className={styles.headingIns}>By Signing Up you can:</label>
                    <br />
                    <div className={styles.card}>
                        <Image className={styles.imgIcon} src={ExperienceFasterIcon} alt='Experience Faster' />
                        <div className={styles.lblCon}>
                            <label className={styles.titleCard}>
                                Experience Faster Connections:
                            </label>
                            <br /> <br />
                            <label className={styles.titleCardDet}>
                                Connect with Health Center for efficient treatment or every time available staff.
                            </label>
                        </div>
                    </div>
                    <br />
                    <div className={styles.card}>
                        <Image className={styles.imgIcon} src={EnsureFirstIcon} alt='Experience Faster' />
                        <div className={styles.lblCon}>
                            <label className={styles.titleCard}>
                                Ensure Trust and Reliability:
                            </label>
                            <br /> <br />
                            <label className={styles.titleCardDet}>
                                Experience doctors for faster treatment and ensuring a trustworthy environment
                            </label>
                        </div>
                    </div>
                    <br />
                    <div className={styles.card}>
                        <Image className={styles.imgIcon} src={EffertlessIcon} alt='Experience Faster' />
                        <div className={styles.lblCon}>
                            <label className={styles.titleCard}>
                                Effortlessly Connect:
                            </label>
                            <br /> <br />
                            <label className={styles.titleCardDet}>
                                Sign up for and seamlessly  connect with Doctors, Registration faster.
                            </label>
                        </div>
                    </div>
                </div>
                {isSendOtp ? <div className={styles.loginFormCon}>
                    <EnterOtp numberOfInputs={4} onComplete={handleOTPComplete} />
                </div> : <div className={styles.loginFormCon}>
                    <h2>Login / Sign Up</h2>
                    <br />
                    <form onSubmit={handleLogin}>
                        <label>Mobile</label>
                        <br />
                        <input
                            maxLength={10}
                            type="text"
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => {
                                if (e.target.value === '' || isNumeric(e.target.value)) {
                                    setMobileNumber(e.target.value)
                                }
                            }}
                        />
                        {error && <p className={styles.error}>{error}</p>}
                        <br />
                        <button type="submit">Send OTP</button>
                    </form>
                </div>}

                <div className={styles.closeIcon}>
                    <a href='' onClick={() => {

                        props.onCloseLoginModal()
                    }}>
                        {/* <FaWindowClose /> */}
                        {isSendOtp ? null : <Image src={Crossicon} width={20} alt='Experience Faster' />}
                    </a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getOtp: getOtp,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileLoginModal);
