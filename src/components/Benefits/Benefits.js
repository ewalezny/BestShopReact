import React from "react";
import styles from "./benefits.module.scss";
import BenefitsBoxText from "./BenefitsBoxText";

const Benefits = () => {
    const {
        benefits,
        container,
        benefits__content,
        benefits__box_first,
        benefits__box__text_first,
        benefits__box__img_first,
        benefits__box_second,
        benefits__box__text_second,
        benefits__box__img_second,
        benefits__box_third,
        benefits__box__text_third,
        benefits__box__img_third
    } = styles;

    return (
        <section className={benefits} id="benefits">
            <div className={container}>
                <div className={benefits__content}>
                    <div className={benefits__box_first}>
                        <BenefitsBoxText className={benefits__box__text_first} heading="Be always first" />
                        <div className={benefits__box__img_first}>
                            <img src="../../../public/assets/Macbook.png" alt="macbook" />
                        </div>
                    </div>
                    <div className={benefits__box_second}>
                        <div className={benefits__box__img_second}>
                            <img src="../../../public/assets/iPhone.png" alt="iphone" />
                        </div>
                        <BenefitsBoxText className={benefits__box__text_second} heading="Your shop is where you are!"/>
                    </div>
                    <div className={benefits__box_third}>
                        <BenefitsBoxText className={benefits__box__text_third} heading="Increase recognition your brand!"/>
                        <div className={benefits__box__img_third}>
                            <img src="../../../public/assets/Trumpet.png" alt="trumpet" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;
