import React, { useCallback, useState } from 'react';
import styles from '../../styles/Landing.module.css';
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
import RoomIcon from "../assets/icon/roomicon.png";



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
        <h1>ROOMS REGISTRATION PROCESS</h1>
      </center>
      <div className={styles.container}>
        <main className={styles.cardCon}>
          <div className={styles.mainCon}>
            <div className={styles.conLblInp}>
              <label className={styles.lblBuyingSelling}>
                {/* India's Best Health Center<br /> Management System<br />Doctors */}
              </label>
            </div>
            <div>
              <Image src={RoomIcon} height={1500} alt='Script Content' />
            </div>
          </div>
          <div className={styles.inpBtnCon}>
            <input className={styles.inp} value={scripValue} maxLength={15} id="enterScriptValue" placeholder=' Enter Rooms Details' onChange={(val) => {
              if (val.target.value === '' || isNumeric(val.target.value)) {
                setScripValue(val.target.value);
              }
            }} />
            <div className={styles.spanSp}></div>
            <button className={styles.btn} onClick={() => {
              if (scripValue)
                Router.push("./listOfScrip");
              else
                alert("Please enter scrips value");
            }}>Search Rooms</button>
          </div><br></br>
          <div>

            <h1>What exactly is a health center management system?</h1>
            <h3>Over the last few decades, the need to digitize the healthcare services industry has increased immensely.
              Having a system in place that will not only allow but also enhance administrative as well as clinical operations
              in the medical field is a must. Healthcare Management System is an all-in-one software system that provides expert
              solutions, automates daily operations, manages documentation, inventory, and bills, and overall lifts the heavy weight
              off the clinicians’ shoulders. More and more of these software tools are appearing in healthcare facilities all over
              the globe, improving the quality of the services provided and pulling their weight in making the world more digitized
              and structured.</h3>
            <h1>Inpatient Rooms</h1> 
            <h3>
             <li>Medical-Surgical Patient Room.</li> 
             <li>Intensive Care Unit Patient Room.</li>
              <li>Maternity Care Patient Room.</li>
              <li>Behavioral and Mental Health Room.</li>
            </h3>
            <h1>
               In particular, we focused a great deal of attention on the design of the patient room to ensure it
               promotes safety, exceptional outcomes, comfort and efficiency.    
               </h1>
             <h3>"Designing a new hospital from the ground up was a rare opportunity, and we were driven to design a 
              facility that redefines how care is delivered," says Barry Rabner, President & CEO, Penn Medicine 
              Princeton Health. "And to help us do that, we asked our patients what they felt they and their families
              needed when in the hospital and asked their opinions on the solutions we were considering."
              Each patient room in PMC contains important safety features and amenities that will help to enhance each 
              patient's experience. 
             </h3>  
           </div>
        </main>
      </div>

      <div className={styles.postLisingCon}>
        <label className={styles.lblPostSelling}>
          Are you looking to best treatment of your body?
        </label>
        <button className={styles.btnPost} onClick={() => { }}>Post your Disease now</button>
      </div>

      <br /><br />
      {isLoggedInModalOpen && <MobileLoginModal
        onCloseLoginModal={() => {
          onCloseLoginModal();
        }}
        handleSubmit={() => {
          onLoginSubmit();
        }} {...props}
      />}
      <Footer />
    </div>
  );
}

export default HomePage;