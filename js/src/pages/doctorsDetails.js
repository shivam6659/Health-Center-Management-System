import styles from "../../styles/DoctorsDetails.module.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
import PatientIcons from "../assets/icon/patienticons.webp"


const handalSubmit = () => {
  alert("Submit call")
}

const DoctorsDetails = () => {

  return <div>
    <Header />
    <div className={styles.container} >
    <center><div className={styles.titleName}><label className={styles.titleLbl}>PATIENT REGISTRATION PROCESS</label></div></center>
   
      <center><label>
        <Image src={PatientIcons} height={500} alt='Script Content' />
      </label>
        <div className={styles.mainCon}>
          <div className={styles.conLblInp}>
            <label className={styles.lblBuyingSelling}>
              {/* India's Best Health Center<br /> Management System<br />Doctors */}
            </label>
          </div>
        </div>
        <form className={styles.formCon} onSubmit={handalSubmit}>
        <div className={styles.cobBoder}>
          <div className={styles.card}>
            {/* <Image className={styles.imgIcon} src={EnsureFirstIcon} alt='Experience Faster' /> */}
            <div className={styles.lblCon}>
              <label className={styles.titleLbl}>
                PATIENT REGISTRATION
              </label>
              <br /> <br />
              <label className={styles.titleCardDet}>
                FILL SOME MANDATORY INFORMATION OF PATIENT AND LOGIN HEALTH CENTER
              </label>
            </div>
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Patient name: </label>
            <input className={styles.inp} type="text" name="Patient name" placeholder="Patient name" size="15" required />
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Gender: </label>
            <select className={styles.inp}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Guardian name: </label>
            <input className={styles.inp} type="text" name="Guardian name" placeholder="Guardian name" size="15" required />
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Relationship: </label>
            <select className={styles.inp}>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Husband">Husband</option>
              <option value="Wife">Wife</option>
            </select></div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Date Of Birth: </label>
            <input className={styles.inp} type="text" name="Date Of Birth" placeholder="XX/MM/YYYY" size="15" required />
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Contact No: </label>
            <input className={styles.inp} type="text" name="Contact No" placeholder="Contact No" size="15" required />
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Patient Address: </label>
            <input className={styles.inp} type="text" name="Patient Address" placeholder="Patient Address" size="15" required />
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Patient Blood Group : </label>
            <select className={styles.inp}>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="o+">o+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">o-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Patient Disease : </label>
            <select className={styles.inp}>
              <option value="Disease">Feaver</option>
              <option value="Blood Presure">Blood Presure</option>
              <option value="Cold">Cold</option>
              <option value="Body pain">Body Pain</option>
              <option value="Sugar">Sugar</option>
              <option value="Tharoid">Tharoid</option>
              <option value="Motiabind">Motiabind</option>
            </select>
          </div>

          <div className={styles.conLblInp}>
            <label className={styles.lbl}> Eamil: </label>
            <input className={styles.inp} type="text" name="Eamil" placeholder="Eamil" size="15" required />
          </div>
            <button type="submit">Submit</button>
         
        </div>
        </form>
      </center>
    </div>
    <Footer />
  </div>
}
export default DoctorsDetails;

