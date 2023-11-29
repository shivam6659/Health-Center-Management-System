import React, { useState, useRef } from 'react';
import styles from "./styles.module.css";

const OTPInput = ({ numberOfInputs, onComplete },props) => {
    const [otpValues, setOtpValues] = useState(Array(numberOfInputs).fill(''));
    const inputRefs = Array(numberOfInputs).fill().map(() => useRef());

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) {
            return;
        }


        // Update the OTP value at the specified index
        setOtpValues((prevValues) => {
            const updatedValues = [...prevValues];
            updatedValues[index] = value;
            //on complete input field
            var cloneArray = JSON.parse(JSON.stringify(updatedValues));
            var filtered = cloneArray.filter(function (el) {
                return el != "";
            });
            if (filtered.length >= numberOfInputs) {
                handleComplete(updatedValues);
                inputRefs[index].current.blur();
            }
            return updatedValues;
        });

        // Move focus to the next input
        if (value !== '' && index < numberOfInputs - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyUp = (e, index) => {
        // Move focus to the previous input on backspace
        if (e.key === 'Backspace' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleComplete = (val) => {
        // Concatenate all OTP values and call the onComplete function
        const otp = val.join('');
        onComplete(otp);
    };

    return (<div className={styles.container}>
        <label className={styles.resendOtpLbl}>
            Please enter the OTP that was sent to your email.
        </label>
        <br/>
        <div className={styles.loginFormCon}>
            {otpValues.map((value, index) => (
                <input
                    className={styles.inp}
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyUp={(e) => handleKeyUp(e, index)}
                    ref={inputRefs[index]}
                />
            ))}
        </div>
        <label className={styles.resendOtpLbl}>
            Didn't get the otp
            <label className={styles.reOtpLbl}> Resend</label>
        </label>
        <br />
        <button onClick={() => handleComplete(otpValues)}>Login</button>
    </div>
    );
};

export default OTPInput;
