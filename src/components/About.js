import React from "react";
import "../style/About.css";

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <h2 className="about-title">
                    About Adverse Childhood Experiences
                </h2>
                <iframe
                    width="100%"
                    height="720px"
                    title="ACES Primer Video"
                    id="ytplayer"
                    type="text/html"

                    src="https://www.youtube-nocookie.com/embed/ccKFkcfXx-c/&vq=hd720"
                    frameBorder="0"
                    allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <p className="about-paragraph">
                    Childhood experiences, both positive and negative, have a
                    tremendous impact on future violence victimization and
                    perpetration, and lifelong health and opportunity. As such,
                    early experiences are an important public health issue. Much
                    of the foundational research in this area has been referred
                    to as Adverse Childhood Experiences (ACEs).
                </p>
                <h4 className="about-sub-title">
                    Adverse Childhood Experiences have been linked to
                </h4>
                <ul className="about-list">
                    <li>Risky health behaviors</li>
                    <li>Chronic health conditions</li>
                    <li>Low life potential</li>
                    <li>Early death</li>
                </ul>
                <h4 className="about-sub-title">
                    As the number of ACEs increases, so does the risk for these
                    outcomes.
                </h4>
                <p className="about-paragraph">
                    The wide-ranging health and social consequences of ACEs
                    underscore the importance of preventing them before they
                    happen. CDC promotes lifelong health and well-being through
                    Essentials for Childhood – Assuring safe, stable, nurturing
                    relationships and environments for all children.{" "}
                    <a href="https://www.cdc.gov/violenceprevention/childabuseandneglect/essentials.html">
                        Essentials for Childhood
                    </a>{" "}
                    can have a positive impact on a broad range of health
                    problems and on the development of skills that will help
                    children reach their full potential.
                </p>
            </div>
        );
    }
}

export default About;
