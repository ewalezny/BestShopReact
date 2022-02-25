import React from "react";
import styles from "./contactinfo.module.scss";
import mailIcon from "../../assets/MailIcon.svg";
import phoneIcon from "../../assets/PhoneIcon.svg";

const ContactInfo = () => {
    const { contact__box_first, contacts, contact__mail, mail, contact__phone, phone } = styles;

    return (
        <div className={contact__box_first}>
            <h1>Any questions?</h1>
            <p>Leave your email address or call us!</p>
            <div className={contacts}>
                <div className={contact__mail}>
                    <img src={mailIcon} alt="mail" />
                        <p className={mail}>info@bestshop.xyz</p>
                </div>
                <div className={contact__phone}>
                    <img src={phoneIcon} alt="phone" />
                        <p className={phone}>123 456 789</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
