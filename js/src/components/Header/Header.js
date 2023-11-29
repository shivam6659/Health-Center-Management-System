import React, { useCallback, useEffect, useState } from 'react';
import Headroom from "react-headroom";
import styles from "./styles.module.css";
import Image from 'next/image';
import userIcon from "../../assets/icon/user_icon.png";
import MobileLoginModal from "../../containers/Login/Login";
import { isLoginUser, deleteUserTokenDetails } from "../../utils/util";
import Router, { useRouter } from 'next/router'

function Header({ isShowGetStarted = true, isShowSellScrips = true, isShowLogin = true }, props) {
    const [isLoggedInModalOpen, setIsLoggedInModalOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const router = useRouter()

    const onCloseLoginModal = useCallback(() => {
        setIsLoggedInModalOpen(false)
    }, [isLoggedInModalOpen]);

    const onLoginSubmit = useCallback(() => {
        setIsLoggedInModalOpen(false)
        router.reload(window.location.pathname);
    }, []);

    const handleUserMenu = (e) => {
        // e.target.style.background = "grey"
        setShowText(!showText)
    }

    const handleUserHover = (e) => {
        // e.target.style.background = "grey"
        // setShowText(true)
    }

    // const handleMouseLeave = e => {
    //     // e.target.style.background = "maroon"
    //     // setShowText(false)
    // }

    return (
        <>
            <header className={styles.mainCon}>
                <Headroom>
                    <div className={styles.container}>
                        <a className={styles.logIcon} href="/">
                            <label className={styles.lblLogoFirst}>
                                Health Center
                                <label className={styles.lblLogo}>
                                    {" Management System"}
                                </label>
                            </label>
                        </a>
                        <main>
                            <div className={styles.div_top_hypers}>
                                <ul className={styles.ul_top_hypers}>
                                <li> <label onClick={() => {
                                     Router.push("/")
                                     }} className={styles.a_top_hypers}>Home</label></li>      
                                <li> <label onClick={() => {
                                    Router.push("/about")
                                    }} className={styles.a_top_hypers}>About</label></li>    
                                <li> <label onClick={() => {
                                        Router.push("/doctorsDetails")
                                    }} className={styles.a_top_hypers}> Patient</label></li>
                                     <li> <label onClick={() => {
                                    Router.push("/doctors")
                                    }} className={styles.a_top_hypers}>Doctors</label></li> 
                                    <li> <label onClick={() => {
                                     Router.push("/rooms")
                                     }} className={styles.a_top_hypers}>Room</label></li>   
                                    {/* {isShowGetStarted && !isLoginUser() ? <li> <label onClick={() => {
                                        setIsLoggedInModalOpen(true)
                                    }} className={styles.a_top_hypers}>Get Started</label></li> : null}
                                    {isShowSellScrips ? <li> <a href="/listOfScrip" className={styles.a_top_hypers}>ShellScript</a></li> : null} */}
                                    {isShowLogin && !isLoginUser() ? <li> <label onClick={() => {
                                        setIsLoggedInModalOpen(true)
                                    }} className={styles.a_top_hypers}> Log In</label></li> : null}
                                   
                                    <li className={styles["nav-item more"]}>
                                        <span className={styles["nav-link"]}>
                                            <Image onClick={handleUserMenu}
                                                onMouseOver={handleUserHover}
                                                // onMouseLeave={handleMouseLeave}
                                                className={styles["userImg icofont-thin-down icofont-sm"]} src={userIcon} height={20} alt="User Image" />
                                        </span>
                                        {showText && <div className={styles["ddhover"]}>
                                            <span><a onClick={() => {
                                                Router.push("/postings")
                                            }}>Postings</a></span>
                                            {isLoginUser() ? <span>
                                                <div className={styles.marginDiv}></div>
                                                <a href='#' onClick={() => {
                                                deleteUserTokenDetails("server_token");
                                            }}>Log Out</a></span> : null}
                                        </div>}
                                    </li>
                                </ul>
                            </div>
                        </main>
                    </div>
                </Headroom>
            </header>
            {isLoggedInModalOpen && <div className={styles.loginPageCon}> <MobileLoginModal
                onCloseLoginModal={() => {
                    onCloseLoginModal();
                }}
                handleSubmit={() => {
                    onLoginSubmit();
                }} {...props}
            /></div>}
        </>
    );
}

export default Header;