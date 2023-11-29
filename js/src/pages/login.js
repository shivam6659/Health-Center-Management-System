import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from "redux";
import styles from "../../styles/Login.module.css";
import Image from 'next/image';
import ExperienceFasterIcon from "../assets/icon/experienceFaster.png";
import EnsureFirstIcon from "../assets/icon/ensureFirst.png";
import EffertlessIcon from "../assets/icon/effertless.png";
import Router, { useRouter } from 'next/router'

import { getOtp } from "../redux/actions/authAction";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const MobileLoginModal = (props) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await props.getOtp({
                onSuccess: (res) => {
                    setCookie("server_token", "#xud$7i899jjjjj");
                    router.back();
                },
                onFailure: (error) => {
                    console.log(error)
                    setError(error || 'Not valid user');
                }
            })
        } catch (error) {
            setError('Please enter valid mobile number');
        }
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
                                Connect with experience doctors for efficient treatment.
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
                                Experience Doctors for fair and transparent treatment
                                 ensuring a trustworthy environment
                            </label>
                        </div>
                    </div>
                    <br />
                    <div className={styles.card}>
                        <Image className={styles.imgIcon} src={EffertlessIcon} alt='Experience Faster' />
                        <div className={styles.lblCon}>
                            <label className={styles.titleCard}>
                                Effortlessly connect :
                            </label>
                            <br /> <br />
                            <label className={styles.titleCardDet}>
                                Sign up for health center connect with experience doctors,closing deals faster.
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.loginFormCon}>
                    <h2>Login / Sign Up</h2>
                    <br />
                    <form onSubmit={handleLogin}>
                        <label>Mobile</label>
                        <br />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        {error && <p className={styles.error}>{error}</p>}
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className={styles.closeIcon}>
                    {/* <a href='#' onClick={() => onCloseLoginModal()}>
                        <Image src={Crossicon} width={20} alt='Experience Faster' />
                    </a> */}
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
