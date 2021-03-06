import React from "react";
import styles from "./statistics.module.scss";
import StatisticsBox from "./StatisticsBox";
import Circle from "./Circle";
import person from "../../assets/Person.svg";
import eye from "../../assets/Eye.svg";
import catalog from "../../assets/Catalog.svg";

const Statistics = () => {
    const {statistics, container, statistics__content, statistics__box, statistics__img_person, statistics__img_eye, statistics__img_catalog} = styles;

    return (
        <section className={statistics} id="statistics">
            <div className={container}>
                <h2>The most popular sales platform in country</h2>
                <div className={statistics__content}>
                    <div className={statistics__box}>
                        <Circle redish />
                        <img src={person} alt="person" className={statistics__img_person}/>
                        <StatisticsBox number="100000+" text="daily entries"/>
                    </div>
                    <div className={statistics__box}>
                        <Circle primary />
                        <img src={eye} alt="eye" className={statistics__img_eye}/>
                        <StatisticsBox number="2000000+" text="seen products every day"/>
                    </div>
                    <div className={statistics__box}>
                        <Circle green />
                        <img src={catalog} alt="catalog" className={statistics__img_catalog}/>
                        <StatisticsBox number="10000+" text="added posts daily"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics;
