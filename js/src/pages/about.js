// import Header from "../components/Header/Header"
// //import Footer from "../components/Footer/Footer"
// import Image from "next/image";
// import imgpng from "../assets/icon/imgpng.png"
// const AboutScreen = (props) => {
//     return <div>
//         <Header />

//         {/* <Footer/> */}

  
       
       

// </div>

// }

// export default AboutScreen;

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
import Abouticons from "../assets/icon/abouticons.png";



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
        <h1> INDIA'S BEST HEALTH CENTER AND TREATMENT</h1>
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
              <Image src={Abouticons}  alt='Script Content' />
            </div>
          </div>
          <div className={styles.inpBtnCon}>
            <input className={styles.inp} value={scripValue} maxLength={15} id="enterScriptValue" placeholder=' Enter Doctors Details' onChange={(val) => {
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
            }}>Search Doctors</button>
          </div>
        </main>

      </div>
      <div className={styles.postLisingCon}>
        <label className={styles.lblPostSelling}>
          {/* Are you looking to best treatment of your body? */}
        </label>
        <button className={styles.btnPost} onClick={() => { }}>Post your Disease now</button>
      </div>
      <br /> <br />
      <div className={styles.headingLblCon}>
        <label className={styles.lblBuyingSelling}>
          Why use our Health Center
        </label>
      </div>
      <br /> <br />
      <div className={styles.staticInfCon}>
        <div className={styles.card}>
          <Image src={meetClient} height={200} alt='Script Content' />
          <div className={styles.lblConF}>
            <label className={styles.titleCard}>
              Trustworthy Marketplace:
            </label>
            <br /> <br />
            <label className={styles.titleCardDet}>
              To be recognized as a premier health center of excellence providing high quality treatment, research and consultancy services to the Patient.
            </label>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className={styles.staticInfCon}>
        <div className={styles.card}>
          <Image src={wideNework} height={200} alt='Wide Network' />
          <div className={styles.lblCon}>
            <label className={styles.titleCard}>
              Quality & Accreditations:
            </label>
            <br /> <br />
            <label className={styles.titleCardDet}>
              Rights of patients are respected & protected and counseled by a legal team whenever required.
            </label>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className={styles.staticInfCon}>
        <div className={styles.card}>
          <Image src={secureTransction} height={200} alt='Secure Transaction' />
          <div className={styles.lblCon}>
            <label className={styles.titleCard}>
              Mission & Vision:
            </label>
            <br /> <br />
            <label className={styles.titleCardDet}>
              "The hospital strives to provide quality healthcare services through patient safety, service excellence and training programs".
            </label>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className={styles.headingLblCon}>
        <label className={styles.lblBuyingSelling}>
          How it works
        </label>
      </div>
      <br /> <br />
      <div className={styles.ul_top_hypers}>
        <div className={styles.bottomCon}>
          <Image src={getstarted} height={500} alt='Wide Network' />
          <br />
          <label className={styles.bottomLblTit}>
            1. Get Started with Health Center:
          </label>
          <br />
          <label className={styles.bottomLblDesc}>
            Start journey, onboard & KYC for trust. Secure, peace-of-mind.
          </label>
        </div>
        <div className={styles.bottomCon}>
          <Image src={listtopsellers} height={200} alt='Wide Network' />
          <br />
          <label className={styles.bottomLblTit}>
            2. List Top Doctors:
          </label>
          <br />
          <label className={styles.bottomLblDesc}>
            Showcase duty credit scrips, attract buyers, unlock trading potential.
          </label>
        </div><div className={styles.bottomCon}>
          <Image src={securetransc} height={200} alt='Wide Network' />
          <br />
          <label className={styles.bottomLblTit}>
            3. Secure Treatments:
          </label>
          <br />
          <label className={styles.bottomLblDesc}>
            Confidently treatment scrips, secure funds with worry-free treatment.
          </label>
        </div>
        <div className={styles.bottomCon}>
          <Image src={salesman} height={200} alt='Wide Network' />
          <br />
          <label className={styles.bottomLblTit}>
            4. Seamless Settlements:
          </label>
          <br />
          <label className={styles.bottomLblDesc}>
            Health Center ensures seamless doctors, treatment, and body recovery growth.
          </label>
        </div>
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