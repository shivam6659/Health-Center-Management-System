// import Header from "../components/Header/Header"
// const Doctors = () => {
//     return <div>
//         <Header/>
//  </div>

// }
// export default Doctors;
import React, { useCallback, useState } from 'react';
import styles from '../../styles/Doctors.module.css';
import materialIcon from "../assets/icon/materialIcon.png";
import meetClient from "../assets/icon/meetClient.png";
import wideNework from "../assets/icon/wideNework.png";
import secureTransction from "../assets/icon/secureTransction.png";
import getstarted from "../assets/icon/getstarted.png";
import securetransc from "../assets/icon/securetransc.png";
import listtopsellers from "../assets/icon/listtopsellers.png";
import salesman from "../assets/icon/salesman.png";
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import { isNumeric } from "../utils/CheckValidations";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MobileLoginModal from "../containers/Login/Login";
import DoctorIcons from "../assets/icon/doctoricons.jpg";

function HomePage() {
  const [scripValue, setScripValue] = useState("");
  const [isLoggedInModalOpen, setIsLoggedInModalOpen] = useState(false)
  const router = useRouter()

  const onCloseLoginModal = useCallback(() => {
    setIsLoggedInModalOpen(false)
  }, [isLoggedInModalOpen]);

  const onLoginSubmit = useCallback(() => {
    setIsLoggedInModalOpen(false)
    router.reload(window.location.pathname);
  }, []);
  return (
    <div>
      <Header />
      <center>
        <h2>
          INDIAS BEST DOCTORS AND TREATEMENT
        </h2>
        </center>

      <div className={styles.container}>
        <div>
          <center><Image src={DoctorIcons} height={500} alt='Script Content' /></center>
        </div>
        <main className={styles.cardCon}>
          <div className={styles.mainCon}>
            <div className={styles.conLblInp}>
              <label className={styles.lblBuyingSelling}>
                {/* India's Best Health Center<br /> Management System<br />Doctors */}
              </label>
            </div>
          </div>
          {/* <div className={styles.inpBtnCon}>
            <input className={styles.inp} value={scripValue} maxLength={15} id="enterScriptValue" placeholder='' onChange={(val) => {
              if (val.target.value === '' || isNumeric(val.target.value)) {
                setScripValue(val.target.value);
              }
            }} /> */}
            {/* <div className={styles.spanSp}>
            <button className={styles.btn} onClick={() => {
              if (scripValue)
                Router.push("./listOfScrip");
              else
                alert("Please enter scrips value");
            }}>Login</button>
          </div>
</div> */}
          {/* </div> */}
        </main>
       <div className={styles.body}>
          <div>
            <center><h2>APPOINMENT FORM</h2></center>
          </div>

          <div className={styles.formboldMainWrapper}>
            {/* <!-- Author: FormBold Team -->
              <!-- Learn More: https://formbold.com --> */}
            <div className={styles.formboldFormWrapper}>
              <form action="https://formbold.com/s/FORM_ID" method="POST" />
              <div className={styles.formboldMb5}>
                <label for="name" className={styles.formboldFormLabel}> Full Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className={styles.formboldFormInput}
                />
              </div>
              <div className={styles.formboldMb5}>
                <label for="phone" className={styles.formboldFormLabel}> Phone Number </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className={styles.formboldFormInput}
                />
              </div>
              <div className={styles.formboldMb5}>
                <label for="email" className={styles.formboldFormLabel}> Email Address </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className={styles.formboldFormInput}
                />
              </div>
              <div className={styles.flexWrapFormboldMx3}>
                <div className={styles.wFullSmWhalfFormboldPx3}>
                  <div className={styles.formboldMb5Wfull}>
                    <label for="date" className={styles.formboldFormLabel}> Date </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className={styles.formboldFormInput}
                    />
                  </div>
                </div>
                <div className={styles.WfullZSmWhalfFormboldpx3}>
                  <div className={styles.formboldMb5}>
                    <label for="time" className={styles.formboldFormLabel}> Time </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className={styles.formboldFormInput}
                    />
                  </div>
                </div>
                <div className={styles.formboldMb5FormboldPt3}>
                  <label className={styles.formboldFormLabel2}>
                    Address Details
                  </label>
                  <div className={styles.flexWrapFormboldMx3}>
                    <div className={styles.wFullSmWhalfFormboldPx3}>
                      <div className={styles.formboldMb5}>
                        <input
                          type="text"
                          name="area"
                          id="area"
                          placeholder="Enter area"
                          className={styles.formboldFormInput}
                        />
                      </div>
                    </div>
                    <div classNmae={styles.wfullSmWhalfFormboldPx3}>
                      <div className={styles.formboldMb5}>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Enter city"
                          className={styles.formboldFormInput}
                        />
                      </div>
                    </div>
                    <div classNmae={styles.wfullSmWhalfFormboldPx3}>
                      <div className={styles.formboldMb5}>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          placeholder="Enter state"
                          className={styles.formboldFormInput}
                        />
                      </div>
                    </div>
                     <div className={styles.wfullSmWhalfFormboldPx3}>
                      <div className={styles.formboldMb5}>
                        <input
                          type="text"
                          name="post-code"
                          id="post-code"
                          placeholder="Post Code"
                          className={styles.formboldFormInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className={styles.formboldBtn} onClick={() => { }}>Book Appointment</button>
                </div>
              </div>
            </div>
            <form />
          </div>
        </div>

        {/* <div className={styles.postLisingCon}>
          <label className={styles.lblPostSelling}>
            Are you looking to best treatment of your body?
          </label>
          <button className={styles.btnPost} onClick={() => { }}>Post your Disease now</button>
        </div> */}
       <div>
          {isLoggedInModalOpen && <MobileLoginModal
            onCloseLoginModal={() => {
              onCloseLoginModal();
            }}
            handleSubmit={() => {
              onLoginSubmit();
            }} {...props}
          />}
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default HomePage; 