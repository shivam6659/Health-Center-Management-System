import { useCallback, useEffect, useState } from "react";
import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from "redux";
import styles from "../../styles/Postings.module.css";
import { isNumeric } from "../utils/CheckValidations";
import Image from 'next/image';
import rightTick from "../assets/icon/rightTick.png";
import { getSellerListData } from "../redux/actions/sellerAction";
import moment from "moment";
import { ShowDate } from "../constants/Enums";
import { ItemsPerPage } from "../constants/constant";
import LoadingPage from "../components/Loading/loadingPage";
import { isStringEqual, isLoginUser } from "../utils/util";
import withPrivateRoute from '../components/PrivateRoutes/privateRoute';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MobileLoginModal from "../containers/Login/Login";
import Router, { useRouter } from 'next/router'

function ListOfScips(props) {
    const [scripValue, setScripValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [scripsList, setScripsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isClickOnEdit, setIsClickOnEdit] = useState(-1);
    const [isLoggedInModalOpen, setIsLoggedInModalOpen] = useState(false)
    const totalPages = Math.ceil(scripsList.length / ItemsPerPage);
    const router = useRouter()
    useEffect(() => {
        setIsLoading(true);
        props.getSellerData({
            onSuccess: (res) => {
                setIsLoading(false);
                setScripsList(res)
            },
            onFailure: (err) => {
                setIsLoading(false);
                console.log("Error ", err)
            }
        })
    }, [])

    const onCloseLoginModal = useCallback(() => {
        setIsLoggedInModalOpen(false)
    }, [isLoggedInModalOpen]);

    const onLoginSubmit = useCallback(() => {
        setIsLoggedInModalOpen(false)
        router.reload(window.location.pathname);
    }, []);

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const startIndex = (currentPage - 1) * ItemsPerPage;
    const paginatedItems = scripsList.slice(startIndex, startIndex + ItemsPerPage);

    return (<>
        {isLoading ? <LoadingPage /> : <div>
            <Header isShowGetStarted={false} />
            <div className={styles.container}>
                <br />
                <div className={styles.inpBtnCon}>
                    {/* <input className={styles.inp} value={scripValue} maxLength={15} id="enterScriptValue" placeholder='₹ Enter Script Value (ex. 100000)' onChange={(val) => {
                        if (val.target.value === '' || isNumeric(val.target.value)) {
                            setScripValue(val.target.value);
                        }
                    }} />
                    <div className={styles.spanSp}></div>
                    <button className={styles.btn} onClick={() => {
                        if (scripValue) { }
                        else {
                            alert("Please enter scrips value");
                        }
                    }}>Your Postings</button> */}
                    <div className={styles.sortingTotalList}>
                    <label className={styles.lblCount}>{"Your Postings"}</label>
                </div>
                </div>
                <br />
                {/* <div className={styles.sortingTotalList}>
                    <label className={styles.lblCount}>{paginatedItems.length + " Postings"}</label>
                </div> */}
                <div>
                    <ul>
                        {paginatedItems.map((item, index) => (
                            <li className={styles.card} key={index}>
                                <div className={styles.lblConCard}>
                                    <label className={styles.lblCardTop}>{"Scrips Value"}</label>
                                    {isClickOnEdit == index ? <input className={styles.inpRow} type="text" value={item?.ScripValue} />
                                        : <label className={styles.lblCardBottom}>{item?.ScripValue}</label>}
                                </div>
                                <div className={styles.lblConCard}>
                                    <label className={styles.lblCardTop}>{"Priced At"}</label>
                                    {isClickOnEdit == index ? <input className={styles.inpRow} type="text" value={item?.ScripPrice} />
                                        : <label className={styles.lblCardBottom}>{item?.ScripPrice}</label>}
                                </div>
                                <div className={styles.lblConCard}>
                                    <label className={styles.lblCardTop}>{"Net Scrips Value"}</label>
                                    {isClickOnEdit == index ? <input className={styles.inpRow} type="text" value={item?.ScripNetPrice} />
                                        : <label className={styles.lblCardBottom}>{item?.ScripNetPrice}</label>}
                                </div>
                                <div className={styles.lblConCard}>
                                    <label className={styles.lblCardTop}>{"Expiry Date"}</label>
                                    {isClickOnEdit == index ? <input className={styles.inpRow} type="date" value={moment(item?.UpdatedAt).format(ShowDate)} />
                                        : <label className={styles.lblCardBottom}>{moment(item?.UpdatedAt).format(ShowDate)}</label>}
                                </div>
                                <div className={styles.lblConCard}>
                                    <label className={styles.lblCardTop}>{"Scrips Type"}</label>
                                    {isClickOnEdit == index ? <input className={styles.inpRow} type="text" value={"xyz"} />
                                        : <label className={styles.lblCardBottom}>{"xyz"}</label>}
                                </div>
                                <button className={styles.btnEdit} onClick={() => {

                                    if (isClickOnEdit === index) {
                                        setIsClickOnEdit(-1)
                                    } else {
                                        setIsClickOnEdit(index);
                                    }
                                }}>Edit</button>
                                <button className={styles.btnCard} onClick={() => {

                                }}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <div className={styles.nextPrevBtnCon}>
                        <button className={styles.btnNextPrev} onClick={handlePrevious} disabled={currentPage === 1}>
                            Prev
                        </button>
                        <label className={styles.pageNoLbl}>
                            {" Page " + currentPage + " of " + totalPages + " "}
                        </label>
                        <button className={styles.btnNextPrev} onClick={handleNext} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
                <br /><br />

            </div>
            {isLoggedInModalOpen && <MobileLoginModal
                onCloseLoginModal={() => {
                    onCloseLoginModal();
                }}
                handleSubmit={() => {
                    onLoginSubmit();
                }} {...props}
            />}
        </div>
        }
    </>
    )
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSellerData: getSellerListData,
    }, dispatch)
}

ListOfScips.getInitialProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfScips);